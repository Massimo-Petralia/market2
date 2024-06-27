import {createContext, useContext, useState} from 'react';
import {DefaultProductContext} from './default-values';
import {ProductContextType} from './product-context-types';
import {Product} from '../../models/market-models';
import {DefaultProduct} from '../../models/default-values';
import {ProductServices} from '../../services/product-services';
import {MarketContext} from '../market-context/market-context-provider';
import {MarketContextType} from '../market-context/market-context-type';
import {useNavigation} from '@react-navigation/native';
import Routes from '../../navigation/navigation-routes';
const ProductContext = createContext<ProductContextType>(DefaultProductContext);
const ProductContextProvider = ({children}: {children: React.ReactNode}) => {
  const productServices = new ProductServices();
  const navigation = useNavigation();
  const [product, setProduct] = useState<Product>(DefaultProduct);
  const {toggleModal, updateNotification} =
    useContext<MarketContextType>(MarketContext);

  const onCreateProduct = (product: Product, accessToken: string) => {
    productServices
      .createProduct(product, accessToken)
      .then(async response => {
        const data = await response.json();
        if (typeof data === 'string') {
          const warning: string = data;
          updateNotification({type: 'warning', text: warning});
          toggleModal();
        } else {
          const product: Product = data;
          setProduct(product);
          updateNotification({type: 'info', text: 'Product added'});
          toggleModal();
        }
      })
      .catch(error => console.error('post request failed: ', error));
  };

  const onUpdateProduct = (product: Product, accessToken: string) => {
    productServices
      .updateProduct(product, accessToken)
      .then(async response => {
        const data = await response.json();
        if (typeof data === 'string') {
          const warning: string = data;
          updateNotification({type: 'warning', text: warning});
          toggleModal();
        } else {
          const product: Product = data;
          setProduct(product);
          updateNotification({type: 'info', text: 'Product updated'});
          toggleModal();
        }
      })
      .catch(error => console.error('put request failed: ', error));
  };

  const onDeleteProduct = (productId: number, accessToken: string) => {
    productServices
      .deleteProduct(productId, accessToken)
      .then(async response => {
        const data = await response.json();
        if (typeof data === 'string') {
          const warning: string = data;
          updateNotification({type: 'info', text: 'Product updated'});
          toggleModal();
        } else {
          navigation.navigate('Market2', {screen: Routes.root.tab.home});
        }
      });
  };

  return (
    <ProductContext.Provider
      value={{
        product,
        onCreateProduct,
        onUpdateProduct,
        onDeleteProduct,
      }}>
      {children}
    </ProductContext.Provider>
  );
};

export {ProductContext, ProductContextProvider};
