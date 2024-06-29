import {NavigatorScreenParams, RouteProp} from '@react-navigation/native';
import Routes from './navigation-routes';

// export type DetailStackParamsList ={
//   [Routes.root.itemDetail]: {id: number | undefined};
// }
export type RootStackParamList = {
  [Routes.root.main]: NavigatorScreenParams<TabParamList>;
  [Routes.root.itemDetail]: {id: number | undefined};
};

export type TabParamList = {
  [Routes.root.tab.home]: undefined;
  [Routes.root.tab.user.index]: NavigatorScreenParams<UserStackParamList>;
  [Routes.root.tab.Add]: {id: number | null};
  [Routes.root.tab.cart]: undefined;
};

export type UserStackParamList = {
  [Routes.root.tab.user.signin]: undefined;
  [Routes.root.tab.user.signup]: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type ProductRouteProp = RouteProp<RootStackParamList, 'Product detail'>;

// Navigation example
// navigation.navigate('Market2', { screen: 'User', params: { screen: 'Signin' } });
// navigation.navigate('Market2', { screen: 'User', params: { screen: 'Signup' } });
