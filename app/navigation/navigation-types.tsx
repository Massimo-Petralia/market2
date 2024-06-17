import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { CompositeNavigationProp, NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Main: NavigatorScreenParams<TabParamList>;
  'Product detail': {id: number | null};
};

export type TabParamList = {
  Home: undefined;
  User:   NavigatorScreenParams<UserStackParamList>;
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

export type TabScreenNavigationProp = CompositeNavigationProp<
NativeStackNavigationProp<TabParamList>,
NativeStackNavigationProp<RootStackParamList>
>

export  type UserScreenNavigationProp = CompositeNavigationProp<
NativeStackNavigationProp<UserStackParamList>,
CompositeNavigationProp<
NativeStackNavigationProp<TabParamList>,
NativeStackNavigationProp<RootStackParamList>
>
>

export type RootScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>
