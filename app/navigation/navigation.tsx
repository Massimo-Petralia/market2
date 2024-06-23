import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainTabNavigator} from './tab-navigation';
import {ProductPage} from '../features/product/product-page';
import {RootStackParamList} from './navigation-types';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import Routes from './navigation-routes';
import {adaptNavigationTheme} from 'react-native-paper';
import {MarketContext} from '../context/market-context/market-context-provider';
import {MarketContextType} from '../context/market-context/market-context-type';
import {useContext} from 'react';
import {CustomHeader} from '../components/custom-screen-header';
import { UserContextProvider } from '../context/user-context/user-context-provider';
const {DarkTheme} = adaptNavigationTheme({reactNavigationDark: DefaultTheme});
const {LightTheme} = adaptNavigationTheme({reactNavigationLight: DefaultTheme});
const RootStack = createNativeStackNavigator<RootStackParamList>();
import { UserContext } from '../context/user-context/user-context-provider';
import { UserContextType } from '../context/user-context/user-context-types';

export const RootNavigator = () => {
  const {marketState} = useContext<MarketContextType>(MarketContext);
  return (
    <NavigationContainer theme={!marketState.isDarkTheme ? LightTheme : DarkTheme}>
      <RootStack.Navigator initialRouteName={Routes.root.main}>
        <RootStack.Screen
          name={Routes.root.main}
          component={MainTabNavigator}
          options={{
            header: props => <CustomHeader  {...props} />,
          }}
        />
        <RootStack.Screen
          name={Routes.root.itemDetail}
          component={ProductPage}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
