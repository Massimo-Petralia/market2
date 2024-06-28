import {useContext} from 'react';
import {View, Pressable} from 'react-native';
import {
  MD3LightTheme,
  MD3DarkTheme,
  Button,
  Text,
  useTheme,
} from 'react-native-paper';
import MaterialcommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {MarketContext} from '../context/market-context/market-context-provider';
import {MarketContextType} from '../context/market-context/market-context-type';

export const FormControlDelete = () => {
  const theme = useTheme();
  const {toggleModal, updateNotification} =
    useContext<MarketContextType>(MarketContext);

  return (
    <View>
      <Pressable
        style={{
          borderColor: theme.colors.error,
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 1,
          borderRadius: 50,
          paddingHorizontal: 4,
          paddingVertical: 4,
        }}
        onPress={() => {
          updateNotification({
            type: 'delete',
            text: 'Are you sure you want to delete',
          });
          toggleModal();
        }}>
        <MaterialcommunityIcons
          color={theme.colors.error}
          name="delete-circle"
          size={25}
        />

        <Text style={{color: theme.colors.error}}> Delete </Text>
      </Pressable>
    </View>
  );
};
