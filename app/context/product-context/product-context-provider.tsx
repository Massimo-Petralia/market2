import {createContext, useState} from 'react';
import {DefaultProductContext} from './default-values';
import {ProductContextType} from './product-context-types';
import {Product} from '../../models/market-models';
import {DefaultProduct} from '../../models/default-values';
import {ProductServices} from '../../services/product-services';
import {Notification} from '../../components/modal-notification';
import {ModalNotification} from '../../components/modal-notification';

const ProductContext = createContext<ProductContextType>(DefaultProductContext);
const productServices = new ProductServices();
const ProductContextProvider = ({children}: {children: React.ReactNode}) => {
  const [product, setProduct] = useState<Product>(DefaultProduct);
  const [visible, setVisible] = useState<boolean>(false);
  const [notification, setNotification] = useState<Notification>({
    type: 'info' || 'warning',
    text: '',
  });

  const toggleModal = () => {
    setVisible(!visible);
  };

  const onCreateProduct = (product: Product, accessToken: string) => {
    productServices
      .createProduct(product, accessToken)
      .then(async response => {
        const data = await response.json();
        if (typeof data === 'string') {
          const warning: string = data;
          setNotification({type: 'warning', text: warning});
          toggleModal();
        } else {
          const product: Product = data;
          setProduct(product); 
          setNotification({type: 'info', text: 'Product added'});
          toggleModal();
        }
      })
      .catch(error => console.error('post request failed: ', error));
  };

const onUpdateProduct = (product: Product, accessToken: string) => {
  productServices.updateProduct(product, accessToken).then(
    async response => {
      const data = await response.json();
      if (typeof data === 'string') {
        const warning : string = data;
        setNotification({type: 'warning', text: warning})
        toggleModal()
      } else {
        const product : Product = data;
        setProduct(product);
        setNotification({type: 'info', text : 'Product updated'})
        toggleModal()
      }
    }
  ).catch(error => console.error('put request failed: ', error))
}

  return (
    <>
      <ProductContext.Provider value={{product, onCreateProduct, onUpdateProduct}}>
        {children}
      </ProductContext.Provider>
      <ModalNotification
        visible={visible}
        notification={notification}
        toggleModal={toggleModal}
      />
    </>
  );
};

export {ProductContext, ProductContextProvider};
