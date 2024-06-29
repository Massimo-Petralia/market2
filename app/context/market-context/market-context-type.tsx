import {
  MarketState,
  Notification,
  Product,
  User,
} from '../../models/market-models';

export type MarketContextType = {
  marketState: MarketState;
  updateProducts: (products: Product[]) => void;
  updateProduct: (product: Product) => void;
  updateUser: (user: User) => void;
  updateTheme: (isDarkTheme: boolean) => void;
  updateNotification: (notification: Notification) => void;
  toggleModal: () => void;
  showErrorModal: (text: string) => void
  updateCart: (cart: Product[])=> void
};
