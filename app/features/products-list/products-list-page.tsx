import React from 'react';
import {View} from 'react-native';
import {ProductsListView} from './products-list-view';
import {useFocusEffect} from '@react-navigation/native';

export const ProductsListPage = () => {
  useFocusEffect(
    React.useCallback(() => {
      let isFocused: boolean = true;
      if (isFocused) {
        console.log('the "Home" screen is focused');
      }
      isFocused = false;
    }, []),
  );
  return (
    <View>
      <ProductsListView />
    </View>
  );
};
