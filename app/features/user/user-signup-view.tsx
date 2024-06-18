import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

export const UserSignupView = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>user signup work !</Text>
      <Button
        mode="contained"
        rippleColor="green"
        onPress={() =>
          navigation.navigate('Main', {
            screen: 'User',
            params: {screen: 'Signin'},
          })
        }>
        go to signin
      </Button>
    </View>
  );
};
