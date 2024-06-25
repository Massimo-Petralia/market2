import {Product} from '../models/market-models';
import {MarketContext} from '../context/market-context/market-context-provider';
import {MarketContextType} from '../context/market-context/market-context-type';
import {useContext} from 'react';
import {MD3LightTheme, MD3DarkTheme, Button, Text} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {View} from 'react-native';
import {ProductContext} from '../context/product-context/product-context-provider';
import {ProductContextType} from '../context/product-context/product-context-types';
export const FormControls = ({
  product,
  accessToken,
}: {
  product: Product;
  accessToken: string;
}) => {
  const {marketState} = useContext<MarketContextType>(MarketContext);
  const useProduct = useContext<ProductContextType>(ProductContext);
  return (
    <View>
      <View
        style={{
          alignSelf: 'flex-end',
          marginHorizontal: 20,
          marginVertical: 10,
          bottom: '100%',
        }}>
        <Button
          mode="contained"
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}
          onPress={() => {
            if (!product.id) {
              useProduct.onCreateProduct(product, accessToken);
            }
            if (product.id) {
              useProduct.onUpdateProduct(product, accessToken);
            }
          }}>
          <FontAwesome5 name="save" size={16} />
          <Text
            style={{
              color: !marketState.isDarkTheme
                ? MD3LightTheme.colors.onPrimary
                : MD3DarkTheme.colors.onPrimary,
            }}>
            {' '}
            Save
          </Text>
        </Button>
      </View>
    </View>
  );
};
