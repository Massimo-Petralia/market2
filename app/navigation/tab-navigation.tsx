import { createMaterialBottomTabNavigator } from "react-native-paper/lib/typescript/react-navigation";

import { ProductsListPage } from "../features/products-list/products-list-page";
import { UserNavigator } from "./user-navigation";
import { ProductPage } from "../features/product/product-page";
import { CartPage } from "../features/cart/cart-page";

const Tab = createMaterialBottomTabNavigator()

export const MainTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen  name="Home" component={ProductsListPage}/>
            <Tab.Screen name="User" component={UserNavigator}/>
            <Tab.Screen name="Add" component={ProductPage}/>
            <Tab.Screen name="Cart" component={CartPage}/>
        </Tab.Navigator>
    )
}