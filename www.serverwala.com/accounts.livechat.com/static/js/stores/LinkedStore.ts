import Cookies from 'js-cookie';
import Store, { IData, StoreValue } from './Store';
import Location from '../modules/Location';

export default class LinkedStore {
  parent?: LinkedStore;
  keys?: string[];
  data: Store;

  constructor(parent: LinkedStore, keys: string[]) {
    this.data = new Store();
    this.parent = parent;
    this.keys = keys;

    this.readParams();
  }

  readParams(): void {
    const obj: IData = {};

    if (this.keys != null) {
      this.keys.forEach((param): void => {
        const value = Location.getUrlParam(param) || Cookies.get(param);
        if (value) {
          try {
            obj[param] = decodeURIComponent(value);
          } catch (e) {
            obj[param] = value;
          }
        }
      });
    }

    this.set(obj);
  }

  toObject(): IData {
    if (this.parent != null) {
      return Object.assign({}, this.parent.toObject(), this.data.toObject());
    }

    return Object.assign({}, this.data.toObject());
  }

  set(data: IData): void {
    if (this.parent != null) {
      this.parent.set(data);
    }

    let filtered = data;
    if (this.keys != null) {
      filtered = {};
      this.keys.forEach((key: string): void => {
        if (data[key] != null) {
          filtered[key] = data[key];
        }
      });
    }

    this.data.set(filtered);
  }

  get(key: string): StoreValue {
    if (this.parent != null) {
      const val = this.parent.get(key);
      if (val != null) {
        return val;
      }
    }

    return this.data.get(key);
  }

  multiGet(keys: string[]): any {
    const res = {};

    keys.forEach((key: string): void => {
      const val = this.get(key);
      if (val != null) {
        res[key] = val;
      }
    });

    return res;
  }

  delete(key: string): void {
    if (this.parent != null) {
      this.parent.delete(key);
    }

    this.data.delete(key);
  }

  flush(): void {
    if (this.parent != null) {
      this.parent.flush();
    }

    this.data = new Store();
  }
}
