import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MaterialBottomTabNavigationProp } from "react-native-paper";
export type RootStackParamList = {
    Main: undefined;
    "Product detail": {id: number | null}
}

export type TabParamList = {
    Home: undefined;
    User: undefined;
    Add: {id: number | null};
    Cart: undefined //parametro provvisorio
}

export type UserStackParamList = {
    Signin: undefined;
    Signup: undefined
}

export type MainScreenNavigationProp = NativeStackNavigationProp<
RootStackParamList, 'Main'>

export type ProductDetailScreenNavigationProp = NativeStackNavigationProp<
RootStackParamList, 'Product detail'
>

export type HomeScreenTabNavigationProp = MaterialBottomTabNavigationProp<
TabParamList, 'Home'
>

export type UserScreenTabNavigationProp = MaterialBottomTabNavigationProp<
TabParamList, 'User'
>

export type AddScreenTabNavigationProp = MaterialBottomTabNavigationProp<
TabParamList, 'Add'
>

export type CartScreenTabNavigationProp = MaterialBottomTabNavigationProp<
TabParamList, 'Cart'
>

export type SigninScreenNavigationProp = NativeStackNavigationProp<
UserStackParamList, 'Signin'
>

export type SignupScreenNavigationProp = NativeStackNavigationProp<
UserStackParamList, 'Signup'
>



