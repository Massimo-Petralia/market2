import {View} from 'react-native';
import {ProductView} from './product-view';
import {ProductContext} from '../../context/product-context/product-context-provider';
import {ProductContextType} from '../../context/product-context/product-context-types';
import React, {useContext, useState} from 'react';
import {useRoute, useFocusEffect} from '@react-navigation/native';
import {ProductRouteProp} from '../../navigation/navigation-types';
import {DefaultProduct} from '../../models/default-values';
import {Product} from '../../models/market-models';
export const ProductPage = () => {
  const {product, formProduct, setFormProduct, onGetProduct, resetProduct} =
    useContext<ProductContextType>(ProductContext);
  const route = useRoute<ProductRouteProp>();
  const id: number | undefined = route.params.id;
  useFocusEffect(
    React.useCallback(() => {
      if (typeof id === 'number') {
        onGetProduct(id);
      } else resetProduct();
    }, [id]),
  );
  return (
    <View>
      <ProductView product={formProduct} setFormProduct={setFormProduct} />
    </View>
  );
};
