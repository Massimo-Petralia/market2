import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from 'react-native-paper';
import {ProductContext} from '../../context/product-context/product-context-provider';
import {ProductContextType} from '../../context/product-context/product-context-types';
import {UserContext} from '../../context/user-context/user-context-provider';
import {UserContextType} from '../../context/user-context/user-context-types';
import {useContext} from 'react';
import {Product} from '../../models/market-models';
import { MarketContext } from '../../context/market-context/market-context-provider';
import { MarketContextType } from '../../context/market-context/market-context-type';
export const FormControlAddToCart = ({product}: {product: Product}) => {
  const {updateNotification, toggleModal} = useContext<MarketContextType>(MarketContext)
  const {user, addToUserCart} = useContext<UserContextType>(UserContext);
  const theme = useTheme();
  return (
    <View style={{alignItems: 'center'}}>
      <Button
        mode="contained"
        onPress={() => {
          if (user.id) {
            addToUserCart(product, user.id, user.accessTokken);
          }else {
            updateNotification({type: 'warning', text: 'Missing token'})
            toggleModal()
          }
        }}>
        <MaterialCommunityIcons
          name="cart-plus"
          size={18}
          color={theme.colors.onPrimary}
        />
        <Text style={{color: theme.colors.onPrimary}}> Add to cart</Text>
      </Button>
    </View>
  );
};
