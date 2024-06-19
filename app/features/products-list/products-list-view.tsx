import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Routes from '../../navigation/navigation-routes';

export const ProductsListView = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>product list View work !</Text>
      <Button
        mode="contained"
        onPress={() => navigation.navigate(Routes.root.itemDetail, {id: 1})}>
        go to product detail
      </Button>
    </View>
  );
};
