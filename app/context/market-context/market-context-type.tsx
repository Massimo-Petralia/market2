import {MarketState, Product, User} from '../../models/market-models';
import { DefaultUser } from '../../models/default-values';

export type MarketContextType = {
  marketState: MarketState;
  updateProducts: (products: Product[]) => void;
  updateProduct: (product: Product) => void;
  updateUser: (user: User) => void;
  updateNotification: (notification: string) => void;
  updateTheme: (isDarkTheme: boolean) => void;
};

