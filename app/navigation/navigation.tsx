import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainTabNavigator } from "./tab-navigation";
import { ProductPage } from "../features/product/product-page";
import { RootStackParamList } from "./navigation-types";

const RootStack = createNativeStackNavigator<RootStackParamList>()

export const RootNavigator = () => {
    return (
        <RootStack.Navigator>
            <RootStack.Screen name="Main" component={MainTabNavigator} options={{ headerShown: false }}/>
            <RootStack.Screen name="Product detail" component={ProductPage}/>
        </RootStack.Navigator>
    )
}

