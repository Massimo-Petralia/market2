import {useState} from 'react';
import {View, Pressable} from 'react-native';
import {ModalNotification, Notification} from './modal-notification';
import {Product} from '../models/market-models';
import {MD3LightTheme, MD3DarkTheme, Button, Text} from 'react-native-paper';
import MaterialcommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const FormControlDelete = () =>
  //     {
  //   product,
  //   accessToken,
  // }: {
  //   product: Partial<Product>;
  //   accessToken: string;
  // }
  {
    const [visible, setVisible] = useState<boolean>(false);
    const [notification, setNotification] = useState<Notification>({
      type: 'info' || 'warning',
      text: '',
    });
    const toggleModal = () => {
      setVisible(!visible);
    };

    return (
      <View>
        <Pressable
          style={{
            borderColor: 'red',
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderRadius: 50,
            paddingHorizontal: 4,
            paddingVertical:4,
          }}
          onPress={() => {
            setNotification({
              type: 'delete',
              text: 'Are you sure you want to delete',
            });
            toggleModal();
          }}>
          <MaterialcommunityIcons color='red' name="delete-circle" size={25} />

          <Text style={{color: 'red'}}> Delete </Text>
        </Pressable>
        <ModalNotification
          visible={visible}
          notification={notification}
          toggleModal={toggleModal}
        />
      </View>
    );
  };
