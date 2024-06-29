import { Product } from "../../models/market-models";
import React from "react";

export type ProductContextType = {
    product: Product;
    formProduct: Product;
    setFormProduct: React.Dispatch<React.SetStateAction<Product>>;
    onCreateProduct: (product: Product, accessToken:string) => void
    onUpdateProduct: (product: Product, accessToken:string) => void
    onDeleteProduct: (productId: number, accessToken:string) => void
    onGetProduct: (id: number) => void
    resetProduct: () => void
}