import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MaterialBottomTabNavigationProp} from 'react-native-paper';

export type RootStackParamList = {
  Main: undefined;
  'Product detail': {id: number | null};
};

export type TabParamList = {
  Home: undefined;
  User: UserStackParamList;
  Add: {id: number | null};
  Cart: undefined;
};

export type UserStackParamList = {
  Signin: undefined;
  Signup: undefined;
};

export type MainScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

export type ProductDetailScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

export type TabScreenNavigationProp =
  MaterialBottomTabNavigationProp<TabParamList>;

export type UserScreenNavigationProp =
  NativeStackNavigationProp<UserStackParamList>;
