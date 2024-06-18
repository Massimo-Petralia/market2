import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';
import {ProductsListPage} from '../features/products-list/products-list-page';
import {UserPage} from '../features/user/user-page';
import {ProductPage} from '../features/product/product-page';
import {CartPage} from '../features/cart/cart-page';
import {TabParamList} from './navigation-types';
import Routes from './navigation-routes';

const Tab = createMaterialBottomTabNavigator<TabParamList>();

export const MainTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName={Routes.root.tab.home}>
      <Tab.Screen name={Routes.root.tab.home} component={ProductsListPage} />
      <Tab.Screen name={Routes.root.tab.user.index} component={UserPage} />
      <Tab.Screen name={Routes.root.tab.Add} component={ProductPage} />
      <Tab.Screen name={Routes.root.tab.cart} component={CartPage} />
    </Tab.Navigator>
  );
};
