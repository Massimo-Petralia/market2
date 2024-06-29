import {useState, createContext} from 'react';
import {MarketState, Notification, Product, User} from '../../models/market-models';
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

  const updateNotification = (notification: Notification) => {
    setState(marketState => ({...marketState, notification: notification}));
  };

  const updateTheme = (isDarkTheme: boolean) => {
    setState(marketState => ({...marketState, isDarkTheme}));
  };

  const toggleModal = () => {
    const visible = marketState.modalVisibility
    setState(marketState => ({...marketState,modalVisibility: !visible}))
  }

  const showErrorModal = (text: string) => {
updateNotification({type: 'warning',  text})
setState(marketState => ({...marketState, modalVisibility: true}))
  }

  return (
    <MarketContext.Provider
      value={{
        marketState,
        updateProducts,
        updateProduct,
        updateUser,
        updateNotification,
        updateTheme,
        toggleModal,
        showErrorModal
      }}>
      {children}
    </MarketContext.Provider>
  );
};

export {MarketContextProvider, MarketContext};
