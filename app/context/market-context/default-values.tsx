import { MarketState } from "../../models/market-models";
import { MarketContextType } from "./market-context-type";
import { DefaultUser } from "../../models/default-values";


export const initialMarketState: MarketState = {
    products: [],
    product: null,
    user: DefaultUser,
    isDarkTheme: false,
    modalVisibility: false,
    notification: {type:  'info' || 'warning' || 'delete', text:''}
  };
  
  export const DefaultMarketContext: MarketContextType = {
    marketState: initialMarketState,
    updateProducts: () => {},
    updateProduct: () => {},
    updateUser: () => {},
    updateTheme: () => {},
    updateNotification: () => {},
    toggleModal: () => {}
  };
  