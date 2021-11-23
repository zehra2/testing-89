import Cookies from 'js-cookie';
import Location from 'modules/Location';

class Config {
  backend_address: string;
  api: string;
  api_environment: string;
  default_client_id: string;
  default_redirect_uri: string;
  default_response_type: string;
  client_id: string;
  redirect_uri: string;
  response_type: string;
  organization_id: string;
  flow: string;
  state: string;
  amplitude: string;
  queueAmplitude: string;

  region: {
    current: string;
    default: string;
  };

  dev_platform: {
    api_url: string;
  };

  api_website: string;
  accounts_url: string;

  organization_app: {
    client_id: string;
  };

  code_challenge: string;
  code_challenge_method: string;

  constructor() {
    this.setup();
  }

  setup = (): void => {
    /* eslint-disable-next-line */
    const config = require(`./config/${process.env.REACT_APP_ENV}.json`);

    this.backend_address = this.replaceLivechatinc(this.useCurrentOrigin(process.env.REACT_APP_BACKEND));
    this.api = config.api;
    this.api_environment = config.api_environment;
    this.default_client_id = config.default_client_id;
    this.default_redirect_uri = encodeURIComponent(config.default_redirect_uri);
    this.default_response_type = config.default_response_type;
    this.client_id = Location.getUrlParam('client_id') || config.default_client_id;
    this.redirect_uri = Location.getUrlParam('redirect_uri') || encodeURIComponent(config.default_redirect_uri);
    this.response_type = Location.getUrlParam('response_type') || config.default_response_type;
    this.organization_id = Location.getUrlParam('organization_id');
    this.flow = Location.getUrlParam('flow') || null;
    this.state = Location.getUrlParam('state');
    this.amplitude = config.amplitude;
    this.queueAmplitude = config.queue_amplitude;
    this.region = {
      current: config.default_region,
      default: config.default_region
    };

    this.readRegionFromUrl();

    this.dev_platform = config.dev_platform;
    this.api_website = config.api_website;
    this.accounts_url = this.useCurrentOrigin(config.accounts_url);
    this.organization_app = config.organization_app;

    this.code_challenge = Location.getUrlParam('code_challenge') || null;
    this.code_challenge_method = Location.getUrlParam('code_challenge_method') || null;
  };

  replaceLivechatinc = (uri): string => {
    if (/livechat\.com$/.test(window.location.origin) && /livechatinc\.com$/.test(uri)) {
      return uri.replace('livechatinc.com', 'livechat.com');
    }

    return uri;
  };

  useCurrentOrigin = (uri): string => {
    if (process.env.REACT_APP_ENV === 'labs') {
      if (Cookies.get('relative-path')) {
        return window.location.origin;
      }
      return uri;
    }
    return uri;
  };

  getApiAddress = (): string => {
    return this.api;
  };

  readRegionFromUrl = (): void => {
    const region = Location.getUrlParam('region');
    if (region) {
      this.updateRegion(region);
    }
  };

  updateRegion = (dc): void => {
    if (this.regionIsValid(dc)) {
      this.region.current = dc;

      if (this.region.current === this.region.default) {
        this.api = this.api.replace(/\/api-[^.]+\./, '/api.');
      } else {
        this.api = this.api.replace('/api.', `/api-${this.region.current}.`);
      }
    }
  };

  regionIsValid = (region: string): boolean => {
    return /^[a-zA-Z0-9-]{2,8}$/.test(region);
  };

  isProduction(): boolean {
    return process.env.REACT_APP_ENV === 'production';
  }
}

export default new Config();

export const isDev =
  process.env.REACT_APP_ENV === 'dev_livechat' ||
  process.env.REACT_APP_ENV === 'labs' ||
  process.env.REACT_APP_ENV === 'staging';
