import { MarketState } from "../../models/market-models";
import { MarketContextType } from "./market-context-type";
import { DefaultUser } from "../../models/default-values";


export const initialMarketState: MarketState = {
    products: [],
    product: null,
    user: DefaultUser,
    notification: '',
    isDarkTheme: false,
  };
  
  export const DefaultMarketContext: MarketContextType = {
    marketState: initialMarketState,
    updateTheme: () => {},
    updateProducts: () => {},
    updateProduct: () => {},
    updateUser: () => {},
    updateNotification: () => {},
  };
  