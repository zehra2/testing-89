import Utils from './Utils';
import Location from './Location';

declare const window: any;

class ChatWidget {
  widgetLoaded = false;

  init(): void {
    if (this.shouldRenderWidget()) {
      this.widgetLoaded = true;

      /* eslint-disable no-underscore-dangle */
      window.__lc = window.__lc || {};
      window.__lc.license = 1520;
      window.__lc.hostname = 'secure-lc.livechatinc.com';

      const lc = document.createElement('script');
      lc.type = 'text/javascript';
      lc.async = true;
      lc.src = `${
        document.location.protocol === 'https:' ? 'https://' : 'http://'
      }cdn.livechatinc.com/staging/tracking.js`;
      document.body.appendChild(lc);
    }
  }

  handleContactSupport = (e): void => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    if (this.widgetLoaded) {
      this.invokeAPIMethod('maximize_chat_window');
    } else {
      window.open('https://www.livechat.com/contact/');
    }
  };

  shouldRenderWidget(): boolean {
    if (
      Location.isInLoginButtonPopup() ||
      Location.isInIframe() ||
      Utils.isUsingMobileApp() ||
      Location.getPathName() === 'consent'
    ) {
      return false;
    }

    return true;
  }

  invokeAPIMethod(task): void {
    if (task === 'maximize_chat_window') {
      window.LC_API.open_chat_window();
    }
  }
}

export default new ChatWidget();
