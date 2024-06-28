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
  const [formProduct, setFormProduct] = useState<Product>(DefaultProduct);

  const {toggleModal, updateNotification, showErrorModal} =
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
          setFormProduct(product);
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
          setFormProduct(product);
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
          if (data === 'Missing token') {
            showErrorModal(data);
          } else {
            toggleModal();
          }
        } else {
          toggleModal();
          navigation.navigate('Market2', {screen: Routes.root.tab.home});
        }
      })
      .catch(error => console.error('delete request failed: ', error));
  };

  const onGetProduct = (id: number) => {
    productServices
      .getProduct(id)
      .then(async response => {
        const data: Product = await response.json();
        setProduct(data);
        setFormProduct(data);
      })
      .catch(error => console.error('get request failed: ', error));
  };

  const resetProduct = () => {
    setProduct(DefaultProduct);
    setFormProduct(DefaultProduct)
  };

  return (
    <ProductContext.Provider
      value={{
        product,
        formProduct,
        setFormProduct,
        onCreateProduct,
        onUpdateProduct,
        onDeleteProduct,
        onGetProduct,
        resetProduct,
      }}>
      {children}
    </ProductContext.Provider>
  );
};

export {ProductContext, ProductContextProvider};
