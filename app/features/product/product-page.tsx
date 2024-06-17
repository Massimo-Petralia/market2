import { View } from "react-native"
import { ProductView } from "./product-view"
import { Button } from "react-native-paper"
import { useNavigation } from "@react-navigation/native"
import { HomeScreenTabNavigationProp} from "../../navigation/navigation-types"


export const ProductPage = ()=> {
  const navigation = useNavigation<HomeScreenTabNavigationProp>()
    return (
        <View>
          <Button
          mode="contained"
          rippleColor='green'
          onPress={()=> navigation.navigate('Home')}
          >go back after delete</Button>
          <ProductView/>
        </View>
    )
}