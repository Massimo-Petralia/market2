import {View} from 'react-native';
import {CartView} from './cart-view';
import {UserContext} from '../../context/user-context/user-context-provider';
import {UserContextType} from '../../context/user-context/user-context-types';
import React, {useContext, useState} from 'react';
import {Product} from '../../models/market-models';
import {useFocusEffect} from '@react-navigation/native';

export const CartPage = () => {
  const {user} = useContext<UserContextType>(UserContext);
  const [cart, setCart] = useState<Product[]>([]);

  useFocusEffect(
    React.useCallback(() => {
      setCart(user.cart);
    }, [user]),
  );

  return (
    <View>
      <CartView _cart={cart} user={user} />
    </View>
  );
};
