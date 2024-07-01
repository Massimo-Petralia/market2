import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {UserSigninView} from '../features/user/user-signin-view';
import {UserSignupView} from '../features/user/user-signup-view';
import {UserStackParamList} from './navigation-types';
import Routes from './navigation-routes';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {AddressFormView} from '../features/user/user-address-view';
import {useNavigation} from '@react-navigation/native';
import {UserContext} from '../context/user-context/user-context-provider';
import {UserContextType} from '../context/user-context/user-context-types';
import {useContext} from 'react';
const UserStack = createNativeStackNavigator<UserStackParamList>();

export const UserNavigator = () => {
  const {user} = useContext<UserContextType>(UserContext);
  const navigation = useNavigation();
  return (
    <>
      <UserStack.Navigator initialRouteName={Routes.root.tab.user.signin}>
        <UserStack.Screen
          name={Routes.root.tab.user.signin}
          component={UserSigninView}
        />
        <UserStack.Screen
          name={Routes.root.tab.user.signup}
          component={UserSignupView}
        />
        <UserStack.Screen name="Address" component={AddressFormView} />
      </UserStack.Navigator>
      {user && user.id ? (
        <Button
          onPress={() =>
            navigation.navigate(Routes.root.main, {
              screen: Routes.root.tab.user.index,
              params: {screen: Routes.root.tab.user.address},
            })
          }
          mode="contained"
          style={style.input}>
          Address
        </Button>
      ) : null}
    </>
  );
};

const style = StyleSheet.create({
  input: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
});
