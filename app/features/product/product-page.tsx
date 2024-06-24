import {View} from 'react-native';
import {ProductView} from './product-view';
import {ProductContextProvider} from '../../context/product-context/product-context-provider';

export const ProductPage = () => {
  return (
    <View>
      <ProductContextProvider>
        <ProductView />
      </ProductContextProvider>
    </View>
  );
};
