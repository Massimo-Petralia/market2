import React, {createContext, useState} from 'react';
import {ProductListContextType} from './products-list-context-types';
import {DefaultProductsListContext} from './default-values';
import {Product} from '../../models/market-models';
import {ProductServices} from '../../services/product-services';
const ProductsListContext = createContext<ProductListContextType>(
  DefaultProductsListContext,
);

const ProductsListContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const productServices = new ProductServices();
  const [products, setProducts] = useState<Product[]>([]);
  const onGetProductsList = () => {
    productServices
      .getProducts()
      .then(async response => {
        const data: Product[] = await response.json();
        setProducts(data);
      })
      .catch(error => console.error('get request failed: ', error));
  };

  return (
    <ProductsListContext.Provider value={{products, onGetProductsList}}>
      {children}
    </ProductsListContext.Provider>
  );
};

export {ProductsListContextProvider};
