import { Product } from "../../models/market-models";

export type ProductContextType = {
    product: Product;
    onCreateProduct: (product: Product, accessToken:string) => void
    onUpdateProduct: (product: Product, accessToken:string) => void
    onDeleteProduct: (productId: number, accessToken:string) => void
}