import {createContext, useState} from 'react';
import {DefaultProductContext} from './default-values';
import {ProductContextType} from './product-context-types';
import {Product} from '../../models/market-models';
import {DefaultProduct} from '../../models/default-values';
import { ProductServices } from '../../services/product-services';

const ProductContext = createContext<ProductContextType>(DefaultProductContext);
const productServices = new ProductServices()
const ProductContextProvider = ({children}: {children: React.ReactNode}) => {
  const [product, setProduct] = useState<Product>(DefaultProduct);

  const addProduct = (product: Product, accessToken: string) => {
    productServices.createProduct(product, accessToken).then(async response => {
      const data = await response.json()
      if(typeof data === 'string') {
        const warning : string = data
        //qui gestisci i messaggi di errore di json-server-auth
        console.log('response data: ', warning)
      }else {
        const product: Product = data
        setProduct(product) // questo trighererà un'effetto nella prodotto
        console.log('response data: ', product.name)
      }

    }).catch(error => console.error('post request failed: ', error))
  };

  return (
    <>
      <ProductContext.Provider value={{product, addProduct}}>
        {children}
      </ProductContext.Provider>
    </>
  );
};

export {ProductContext, ProductContextProvider}
