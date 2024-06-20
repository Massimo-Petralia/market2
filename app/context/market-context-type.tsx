import {MarketState, Product, UserData} from '../models/market-models';
import {MD3Theme} from 'react-native-paper';

export type MarketContextType = {
  state: MarketState;
  updateProducts: (products: Product[]) => void;
  updateProduct: (product: Product) => void;
  updateUserData: (userData: UserData) => void;
  updateNotification: (notification: string) => void;
  updateTheme: (isDarkTheme:boolean) => void;
} ;

export const initialState: MarketState = {
  products: [],
  product: null,
  userData: null,
  notification: '',
  isDarkTheme: false,
};

export const defaultContext: MarketContextType = {
  state: initialState,
  updateTheme: () => {},
  updateProducts: () => {},
  updateProduct: () => {},
  updateUserData: () => {},
  updateNotification: () => {},
};
