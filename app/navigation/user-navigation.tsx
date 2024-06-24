import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {UserSigninView} from '../features/user/user-signin-view';
import {UserSignupView} from '../features/user/user-signup-view';
import {UserStackParamList} from './navigation-types';
import Routes from './navigation-routes';
const UserStack = createNativeStackNavigator<UserStackParamList>();

export const UserNavigator = () => {
  return (
    <UserStack.Navigator initialRouteName={Routes.root.tab.user.signin}>
      <UserStack.Screen
        name={Routes.root.tab.user.signin}
        component={UserSigninView}
      />
      <UserStack.Screen
        name={Routes.root.tab.user.signup}
        component={UserSignupView}
      />
    </UserStack.Navigator>
  );
};
