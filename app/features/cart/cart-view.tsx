import {Pressable, View, Image, ScrollView} from 'react-native';
import {Product, User} from '../../models/market-models';
import {Card, Divider, Text, useTheme, Button} from 'react-native-paper';
import {AddressFormView} from '../user/user-address-view';

export const CartView = ({
  _cart,
  user,
  total,
}: {
  _cart: Product[];
  user: User;
  total: number;
}) => {
  const cart: Product[] = _cart;
  const theme = useTheme();

  return (
    <ScrollView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          marginVertical: 5,
        }}>
        <View
          style={{
            padding: 10,
            borderWidth: 1,
            borderColor: theme.colors.onBackground,
            borderRadius: 6,
          }}>
          <Text>Subtotal price {total}€</Text>
          <Divider />
          <Text>Shipping price 5€</Text>
          <Divider />

          <Text variant="labelLarge">Total: {total + 5}€</Text>
        </View>
        <Button mode="contained">Buy</Button>
      </View>
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
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text>Cart is empty !</Text>
        </View>
      )}
    </ScrollView>
  );
};
