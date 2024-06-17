import { View } from "react-native"
import { Text } from "react-native-paper"
import { Button } from "react-native-paper"
import { useNavigation } from "@react-navigation/native"
import { UserScreenNavigationProp } from "../../navigation/navigation-types"


export const UserSignupView = ()=> {
    const navigation = useNavigation<UserScreenNavigationProp>()
    return (
        <View>
            <Text>user signup view work !</Text>
            <Button
        mode="contained"
        rippleColor="green"
        onPress={() => navigation.navigate('Signin')}>
        go to signin
      </Button>
        </View>
    )
}