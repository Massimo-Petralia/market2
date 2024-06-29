import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {UserContext} from '../../context/user-context/user-context-provider';
import {UserContextType} from '../../context/user-context/user-context-types';
import {useContext} from 'react';
import {Product} from '../../models/market-models';

export const CartView = () => {
  const {user} = useContext<UserContextType>(UserContext);
  const cart: Product[] = user.cart;

  return (
    <View>
      {cart.length !== 0 ? (
        cart.map((product, index) => <Text>Product: {product.name}</Text>)
      ) : (
        <Text>cart is empty !</Text>
      )}
    </View>
  );
};
