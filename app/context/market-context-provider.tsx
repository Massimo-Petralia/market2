import {useState, createContext} from 'react';
import {MarketState, Product, UserData} from '../models/market-models';
import {MarketContextType} from './market-context-type';
import {initialState, defaultContext} from './market-context-type';
import {MD3Theme} from 'react-native-paper';

 const MarketContext = createContext<MarketContextType>(defaultContext);

 const MarketProvider = ({children}: {children: React.ReactNode}) => {
  const [state, setState] = useState<MarketState>(initialState);

  const updateProducts = (products: Product[]) => {
    setState(state => ({...state, products: products}));
  };

  const updateProduct = (product: Product) => {
    setState(state => ({...state, product: product}));
  };

  const updateUserData = (userData: UserData) => {
    setState(state => ({...state, userData: userData}));
  };

  const updateNotification = (notification: string) => {
    setState(state => ({...state, notification: notification}));
  };

  const updateTheme = (isDarkTheme: boolean) => {
    setState(state => ({...state, isDarkTheme}));
  };

  return (
    <MarketContext.Provider
      value={{
        state,
        updateProducts,
        updateProduct,
        updateUserData,
        updateNotification,
        updateTheme,
      }}>
      {children}
    </MarketContext.Provider>
  );
};

export {MarketProvider, MarketContext}
