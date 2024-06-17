import React from 'react';
import {View} from 'react-native';
import {ProductsListView} from './products-list-view';
import {useFocusEffect} from '@react-navigation/native';

export const ProductsListPage = () => {
  useFocusEffect(
    React.useCallback(() => {
      console.log('Home (products list page) Log from effect');//avvolgi l'elaborazione dei dati in una condizione
      //return qui pulisci l'effetto mettendo la condizione a false
    }, []),
  );
  return (
    <View>
      <ProductsListView />
    </View>
  );
};
