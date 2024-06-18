import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

export const UserSigninView = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>user signin work !</Text>
      <Button
        mode="contained"
        rippleColor="green"
        onPress={() =>
          navigation.navigate('Main', {
            screen: 'User',
            params: {screen: 'Signup'},
          })
        }>
        go to signup
      </Button>
    </View>
  );
};
