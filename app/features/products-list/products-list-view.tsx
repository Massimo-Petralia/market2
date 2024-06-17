import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {Button} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { ProductDetailScreenNavigationProp } from '../../navigation/navigation-types';


export const ProductsListView = () => {
    const navigation = useNavigation<ProductDetailScreenNavigationProp>()
  return (
    <View>
      <Text>product list View work !</Text>
      <Button mode="contained"
      rippleColor='green'
      onPress={()=> navigation.navigate('Product detail', {id: 1})}
      >go to product detail</Button>
    </View>
  );
};
