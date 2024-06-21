import { Product } from '../model/product';
import productData from './data.json';

export interface DataService {
  fetchData: () => Product[];
}

export class LocalDataService implements DataService {
  fetchData() {
    return productData;
  }
}
