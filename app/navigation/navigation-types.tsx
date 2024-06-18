import {NavigatorScreenParams} from '@react-navigation/native';

export type RootStackParamList = {
  Main: NavigatorScreenParams<TabParamList>;
  'Product detail': {id: number | null};
};

export type TabParamList = {
  Home: undefined;
  User: NavigatorScreenParams<UserStackParamList>;
  Add: {id: number | null};
  Cart: undefined;
};

export type UserStackParamList = {
  Signin: undefined;
  Signup: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

// Navigation example
// navigation.navigate('Main', { screen: 'User', params: { screen: 'Signin' } });
// navigation.navigate('Main', { screen: 'User', params: { screen: 'Signup' } });