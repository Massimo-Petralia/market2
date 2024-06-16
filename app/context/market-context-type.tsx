import { MarketState, Product, UserData } from "../models/market-models";

export type MarketContextType = {
    state: MarketState;
    updateProducts: (products: Product[]) => void;
    updateProduct: (product: Product) => void;
    updateUserData: (userData: UserData) => void;
    updateNotification: (notification: string) => void
}|null

export const initialState: MarketState = {
    products: [],
    product: null,
    userData: null,
    notification: ''
}
