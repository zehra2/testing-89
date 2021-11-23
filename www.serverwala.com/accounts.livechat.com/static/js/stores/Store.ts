import { IKeyValue } from 'interfaces/keyvalue';

export type StoreValue = string | IKeyValue | number | boolean;

export interface IData {
  [key: string]: StoreValue;
}

export interface NestedIData {
  [key: string]: IData;
}

export default class Store {
  data: IData = {};

  set(data: IData): void {
    this.data = Object.assign(this.data, data);
  }

  get(key: string): StoreValue {
    return this.data[key];
  }

  delete(key: string): void {
    delete this.data[key];
  }

  isEmpty(): boolean {
    return Object.keys(this.data).length === 0;
  }

  toObject(): IData {
    return Object.assign({}, this.data);
  }
}
