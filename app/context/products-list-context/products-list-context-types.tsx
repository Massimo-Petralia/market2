import {Product} from '../../models/market-models';

export type ProductListContextType = {
  products: Product[];
  onGetProductsList: () => void;
};
