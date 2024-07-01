import { Product } from "../models/market-models"


const usersURL = 'http://192.168.1.102:3000/644/users'

export class CartServices {
    addToCart = ( cart: Product[],id: number, accessToken: string) => {

        return fetch(`${usersURL}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${accessToken}`,
              },
              body: JSON.stringify({cart: cart})
        })
    }
}