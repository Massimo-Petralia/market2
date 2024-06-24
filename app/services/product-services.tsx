import { Product } from "../models/market-models"
const productsURL = 'http://192.168.1.102:3000/644/products'
export class ProductServices {
    createProduct =(product: Product, accessToken: string)=> {
        return fetch(productsURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${accessToken}`
             },
             body: JSON.stringify(product)
        })
    }
}