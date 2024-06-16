import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainTabNavigator } from "./tab-navigation";

const RootStack = createNativeStackNavigator()

export const RootNavigator = () => {
    return (
        <RootStack.Navigator>
            <RootStack.Screen name="Main" component={MainTabNavigator} options={{ headerShown: false }}/>
            
        </RootStack.Navigator>
    )
}

