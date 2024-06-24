import {createContext, useState} from 'react';
import {DefaultProductContext} from './default-values';
import {ProductContextType} from './product-context-types';
import {Product} from '../../models/market-models';
import {DefaultProduct} from '../../models/default-values';

const ProductContext = createContext<ProductContextType>(DefaultProductContext);
const ProductContextProvider = ({children}: {children: React.ReactNode}) => {
  const [product, setProduct] = useState<Product>(DefaultProduct);

  const addProduct = (product: Product) => {};

  return (
    <>
      <ProductContext.Provider value={{product, addProduct}}>
        {children}
      </ProductContext.Provider>
    </>
  );
};
