import {View} from 'react-native';
import {ProductView} from './product-view';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Routes from '../../navigation/navigation-routes';

export const ProductPage = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Button
        mode="contained"
        rippleColor="green"
        onPress={() => navigation.navigate(Routes.root.main, {screen: 'Home'})}>
        go back after delete
      </Button>
      <ProductView />
    </View>
  );
};
