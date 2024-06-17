import {View} from 'react-native';
import {ProductView} from './product-view';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import { TabScreenNavigationProp, UserScreenNavigationProp } from '../../navigation/navigation-types';

export const ProductPage = () => {
  const navigation = useNavigation<TabScreenNavigationProp>();
  return (
    <View>
      <Button
        mode="contained"
        rippleColor="green"
        onPress={() => navigation.navigate('Home')}>
        go back after delete
      </Button>
      <ProductView />
    </View>
  );
};
