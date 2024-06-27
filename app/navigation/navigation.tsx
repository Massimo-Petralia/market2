import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainTabNavigator} from './tab-navigation';
import {ProductPage} from '../features/product/product-page';
import {RootStackParamList} from './navigation-types';
import Routes from './navigation-routes';
import {CustomHeader} from '../components/custom-screen-header';

const RootStack = createNativeStackNavigator<RootStackParamList>();
export const RootNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName={Routes.root.main}>
      <RootStack.Screen
        name={Routes.root.main}
        component={MainTabNavigator}
        options={{
          header: props => <CustomHeader {...props} />,
        }}
      />
      <RootStack.Screen name={Routes.root.itemDetail} component={ProductPage} />
    </RootStack.Navigator>
  );
};
