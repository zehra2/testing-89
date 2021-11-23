import Utils from './Utils';

class Location {
  // getter that can be overwritten for test purposes
  getWindow(): any {
    return window;
  }

  getPathName() {
    return window.location.pathname.substring(1);
  }

  getReferrer() {
    return this.getWindow().document.referrer;
  }

  getReferrerHostname(): string {
    let url;

    try {
      url = new URL(this.getReferrer());
    } catch (e) {
      return '';
    }

    return url.hostname;
  }

  getUrlParam(name) {
    try {
      return (
        decodeURIComponent(
          (new RegExp(`[?|&]${name}=([^&;]+?)(&|#|;|$)`).exec(window.location.search) || [null, ''])[1].replace(
            /\+/g,
            '%20'
          )
        ) || undefined
      );
    } catch (e) {
      if (this.getWindow().console && console.error) {
        console.error(`Malformed URI param: ${name}`);
      }
      return undefined;
    }
  }

  getHashParam(key) {
    const params = window.location.hash.substring(1).split('&');
    const value = params.find(item => item.split('=')[0] === key);
    return value ? decodeURIComponent(value.split('=')[1]) : null;
  }

  getNthUrlParam(paramIndex) {
    const path = window.location.pathname.substring(1);
    const parts = path.split('/');
    if (paramIndex < parts.length) {
      try {
        return decodeURIComponent(parts[paramIndex]);
      } catch (e) {
        return parts[paramIndex];
      }
    } else {
      return '';
    }
  }

  getLastUrlParam() {
    const path = window.location.pathname.substring(1);
    const parts = path.split('/');
    if (parts.length > 0) {
      try {
        return decodeURIComponent(parts[parts.length - 1]);
      } catch (e) {
        return parts[parts.length - 1];
      }
    } else {
      return '';
    }
  }

  getRedirectUri() {
    return this.getHashParam('redirect_uri') || this.getUrlParam('redirect_uri') || this.getJWTParam('redirect_uri');
  }

  getJWTParam(param) {
    try {
      const jwt = Utils.parseJwt(this.getHashParam('state'));
      return jwt[param];
    } catch (e) {
      return null;
    }
  }

  isInLoginButtonFlow() {
    return (
      /^login-button\//.test(this.getPathName()) ||
      this.getUrlParam('flow') === 'button' ||
      this.getJWTParam('flow') === 'button'
    );
  }

  currentModuleSupportsIframeHiddenFlow() {
    const pathName = this.getPathName();

    return !/^billing\//.test(pathName);
  }

  isInLoginButtonPopup() {
    return this.getWindow().opener != null && this.isInLoginButtonFlow();
  }

  isInLoginButtonIframe() {
    return (
      this.getWindow().top !== this.getWindow().self &&
      this.isInLoginButtonFlow() &&
      this.getRedirectUri() != null &&
      this.currentModuleSupportsIframeHiddenFlow()
    );
  }

  isInIframe() {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  }

  closePopupWindow() {
    this.getWindow().close();
  }

  sendPostMessage(data) {
    const json = Object.assign({}, data);
    const domain = this.getRedirectUri();

    const state = this.getUrlParam('state') || this.getHashParam('state');
    if (state) {
      json.state = state;
    }

    if (this.isInLoginButtonIframe()) {
      this.getWindow().parent.postMessage(json, domain);
    } else if (this.isInLoginButtonPopup()) {
      this.getWindow().opener.postMessage(json, domain);
      this.closePopupWindow();
    }
  }
}

export default new Location();
