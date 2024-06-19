import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Routes from '../../navigation/navigation-routes';

export const UserSignupView = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>user signup work !</Text>
      <Button
        mode="contained"
        onPress={() =>
          navigation.navigate(Routes.root.main, {
            screen: Routes.root.tab.user.index,
            params: {screen: Routes.root.tab.user.signin},
          })
        }>
        go to signin
      </Button>
    </View>
  );
};
