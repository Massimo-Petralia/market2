import { useState, createContext } from "react"
import { MarketState, Product, UserData } from "../models/market-models"
import { MarketContextType } from "./market-context-type"
import { initialState } from "./market-context-type"

const MarketContext = createContext<MarketContextType>(null) 

export const MarketProvider = ({children}:{children: React.ReactNode})=> {
const [state, setState] = useState<MarketState>(initialState)

const updateProducts = (products: Product[]) => {
    setState((state) => ({...state, products: products}))
}

const updateProduct = (product: Product) => {
    setState((state) => ({...state, product: product}))
}

const updateUserData = (userData: UserData) => {
    setState((state) => ({...state, userData: userData}))
}

const updateNotification = (notification: string) => {
    setState((state) => ({...state, notification: notification}))
} 

return (
<MarketContext.Provider
value={{
    state,
    updateProducts, 
    updateProduct, 
    updateUserData, 
    updateNotification   
 }}
>
    {children}
</MarketContext.Provider>
)
}