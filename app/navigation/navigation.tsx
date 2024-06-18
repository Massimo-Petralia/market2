import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainTabNavigator} from './tab-navigation';
import {ProductPage} from '../features/product/product-page';
import  { RootStackParamList } from './navigation-types';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './navigation-routes';


const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={Routes.root.main}>
        <RootStack.Screen
          name={Routes.root.main}
          component={MainTabNavigator}
          options={{headerShown: false}}
        />
        <RootStack.Screen name={Routes.root.itemDetail} component={ProductPage} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
