import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Routes from '../../navigation/navigation-routes';

export const UserSigninView = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>user signin work !</Text>
      <Button
        mode="contained"
        onPress={() =>
          navigation.navigate(Routes.root.main, {
            screen: Routes.root.tab.user.index,
            params: {screen: Routes.root.tab.user.signup},
          })
        }>
        go to signup
      </Button>
    </View>
  );
};
