import { Product } from "../../models/market-models";

export type ProductContextType = {
    product: Product;
    addProduct: (product: Product, accessToken:string) => void
}