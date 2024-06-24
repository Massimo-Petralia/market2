import {useState, createContext} from 'react';
import {MarketState, Product, User} from '../../models/market-models';
import {MarketContextType} from './market-context-type';
import {initialMarketState, DefaultMarketContext} from './default-values';

const MarketContext = createContext<MarketContextType>(DefaultMarketContext);

const MarketContextProvider = ({children}: {children: React.ReactNode}) => {
  const [marketState, setState] = useState<MarketState>(initialMarketState);

  const updateProducts = (products: Product[]) => {
    setState(marketState => ({...marketState, products: products}));
  };

  const updateProduct = (product: Product) => {
    setState(marketState => ({...marketState, product: product}));
  };

  const updateUser = (user: User) => {
    setState(marketState => ({...marketState, user: user}));
  };

  const updateNotification = (notification: string) => {
    setState(marketState => ({...marketState, notification: notification}));
  };

  const updateTheme = (isDarkTheme: boolean) => {
    setState(marketState => ({...marketState, isDarkTheme}));
  };

  return (
    <MarketContext.Provider
      value={{
        marketState,
        updateProducts,
        updateProduct,
        updateUser,
        updateNotification,
        updateTheme,
      }}>
      {children}
    </MarketContext.Provider>
  );
};

export {MarketContextProvider, MarketContext};
