import {Pressable, View, Image, ScrollView} from 'react-native';
import {Product, User} from '../../models/market-models';
import {Card, Divider, Text} from 'react-native-paper';

export const CartView = ({_cart, user}: {_cart: Product[]; user: User}) => {
  const cart: Product[] = _cart;

  return (
    <ScrollView>
      {user.id && cart.length !== 0 ? (
        cart.map((product, index) => (
          <Pressable key={index}>
            <Card contentStyle={{flexDirection: 'row', alignItems: 'center'}}>
              <Card.Content>
                <Image
                  style={{height: 140, width: 140}}
                  source={{uri: product.images[0]}}
                  resizeMode="contain"
                />
              </Card.Content>
              <View
                style={{backgroundColor: 'grey', height: 120, width: 2}}></View>
              <Card.Content>
                <Text variant="titleMedium">{product.name}</Text>
                <Divider />
                <Text variant="bodyMedium">{product.price}</Text>
              </Card.Content>
            </Card>
          </Pressable>
        ))
      ) : (
        <View style={{flexDirection: 'row',justifyContent: 'center'}}>
          <Text>Cart is empty !</Text>
        </View>
      )}
    </ScrollView>
  );
};
