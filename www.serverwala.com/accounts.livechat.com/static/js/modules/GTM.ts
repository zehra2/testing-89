declare const window: {
  dataLayer: any[];
};

class GTM {
  dataLayer = window.dataLayer || [];

  logEvent(login, event, opts = {}): void {
    this.dataLayer.push({ event, login, ...opts });
  }

  async track(event, opts = {}): Promise<any> {
    return new Promise((resolve): void => {
      const e = Object.assign({}, opts, { event, eventCallback: resolve });

      this.dataLayer.push(e);
    });
  }
}

export default new GTM();
