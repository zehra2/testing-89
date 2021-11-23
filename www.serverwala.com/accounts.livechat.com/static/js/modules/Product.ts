import Cookies from 'js-cookie';
import GTM from './GTM';
import Location from './Location';

declare const window: any;
declare const ga: any;

export enum Product {
  Undefined = 0,
  LiveChat,
  HelpDesk,
  ChatBot,
  KnowledgeBase
}

function productName(p: Product): string {
  switch (p) {
    case 1:
      return 'LiveChat';
    case 2:
      return 'HelpDesk';
    case 3:
      return 'ChatBot';
    case 4:
      return 'KnowledgeBase';
    default:
      return 'Undefined';
  }
}

export function detectProduct(): Product {
  let detectedProduct = Product.Undefined;

  const hostname = Location.getReferrerHostname();

  if (/livechat(inc)?\.com$/.test(hostname) && /^accounts/.test(hostname) === false) {
    detectedProduct = Product.LiveChat;
  } else if (/helpdesk\.com$/.test(hostname)) {
    detectedProduct = Product.HelpDesk;
  } else if (/chatbot\.com$/.test(hostname)) {
    detectedProduct = Product.ChatBot;
  } else if (/knowledgebase\.ai$/.test(hostname)) {
    detectedProduct = Product.KnowledgeBase;
  }

  if (detectedProduct === Product.Undefined) {
    detectedProduct = parseInt(Cookies.get('product'), 10) || Product.Undefined;
  }

  const currentProduct = parseInt(Cookies.get('product'), 10) || Product.Undefined;

  if (currentProduct !== detectedProduct) {
    Cookies.set('product', detectedProduct, { expires: 365, sameSite: 'strict' });
    GTM.track('virtualPageView', { productID: productName(detectedProduct) });
  }

  return detectedProduct;
}

export function defaultProduct(): void {
  Cookies.remove('product');
  window.location = window.location.origin;
}

export function defaultProductAndOrganization(): void {
  Cookies.remove('product');
  window.location = `${window.location.origin}?organization_id=choose`;
}
