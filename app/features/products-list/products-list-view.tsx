import {View, Pressable, Image} from 'react-native';
import {Card, Text, Divider} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {useFocusEffect} from '@react-navigation/native';
import {ProductsListContext} from '../../context/products-list-context/products-list-context';
import {ProductListContextType} from '../../context/products-list-context/products-list-context-types';
import React, {useContext} from 'react';
import PagerView from 'react-native-pager-view';
export const ProductsListView = () => {
  const navigation = useNavigation();
  const {products, onGetProductsList} =
    useContext<ProductListContextType>(ProductsListContext);

  useFocusEffect(
    React.useCallback(() => {
      let isFocused: boolean = true;
      if (isFocused) {
        onGetProductsList();
      }
      isFocused = false;
    }, []),
  );
  return (
    <View>
      <PagerView useNext initialPage={0}>
        {products.length !== 0 ? (
          products.map((product, index) => (
            <Pressable
              key={index}
              onPress={() => {
                navigation.navigate('Product detail', {id: product.id});
              }}>
              <Card>
                <Card.Title title={product.name} />
                <Divider style={{marginBottom: 10, marginHorizontal: 10}} />
                <Card.Content>
                  <Image
                    style={{height: 140}}
                    source={{uri: product.images[0]}}
                    resizeMode="contain"
                  />
                </Card.Content>
              </Card>
            </Pressable>
          ))
        ) : (
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text>The list is empty</Text>
          </View>
        )}
      </PagerView>
    </View>
  );
};
