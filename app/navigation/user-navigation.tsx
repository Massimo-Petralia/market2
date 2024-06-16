import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { UserSigninView } from '../features/user/user-signin-view'
import { UserSignupView } from '../features/user/user-signup-view'

const UserStack = createNativeStackNavigator()

export const UserNavigator = () => {
    return (
        <UserStack.Navigator initialRouteName='Signin'>
            <UserStack.Screen name='Signin' component={UserSigninView}/>
            <UserStack.Screen name='Signup' component={UserSignupView}/>
        </UserStack.Navigator>
    )
}