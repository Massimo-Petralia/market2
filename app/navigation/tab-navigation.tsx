import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';
import {ProductsListPage} from '../features/products-list/products-list-page';
import {ProductPage} from '../features/product/product-page';
import {CartPage} from '../features/cart/cart-page';
import {TabParamList} from './navigation-types';
import Routes from './navigation-routes';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from 'react-native-paper';
import {UserNavigator} from './user-navigation';

const Tab = createMaterialBottomTabNavigator<TabParamList>();

export const MainTabNavigator = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      initialRouteName={Routes.root.tab.home}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          const size = 26;
          let iconName = '';
          let color = '';
          if (route.name === Routes.root.tab.home) {
            iconName = focused ? 'home-circle' : 'home-circle-outline';
            color = focused ? theme.colors.primary : theme.colors.secondary;
          } else if (route.name === Routes.root.tab.user.index) {
            iconName = focused ? 'account-circle' : 'account-circle-outline';
            color = focused ? theme.colors.primary : theme.colors.secondary;
          } else if (route.name === Routes.root.tab.Add) {
            iconName = focused ? 'storefront' : 'storefront-outline';
            color = focused ? theme.colors.primary : theme.colors.secondary;
          } else if (route.name === Routes.root.tab.cart) {
            iconName = focused ? 'cart' : 'cart-outline';
            color = focused ? theme.colors.primary : theme.colors.secondary;
          }

          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}>
      <Tab.Screen name={Routes.root.tab.home} component={ProductsListPage} />
      <Tab.Screen name={Routes.root.tab.user.index} component={UserNavigator} />
      <Tab.Screen name={Routes.root.tab.Add} component={ProductPage} />
      <Tab.Screen name={Routes.root.tab.cart} component={CartPage} />
    </Tab.Navigator>
  );
};
