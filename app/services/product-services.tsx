import {Product} from '../models/market-models';
const productsURL = 'http://192.168.1.102:3000/644/products';
export class ProductServices {


 getProducts = ()=> {
  return fetch(productsURL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }
  })
 }

  createProduct = (product: Product, accessToken: string) => {
    return fetch(productsURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(product),
    });
  };

  updateProduct = (product: Product, accessToken: string) => {
    return fetch(`${productsURL}/${product.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(product),
    });
  };

  deleteProduct = (productId: number, accessToken: string) => {
    return fetch(`${productsURL}/${productId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
  };
}
