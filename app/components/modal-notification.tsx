import {useState, useContext} from 'react';
import {View} from 'react-native';
import {Modal, Portal, Text, Button, Icon} from 'react-native-paper';
export type NotificationTypes = 'info' | 'warning';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {MD3DarkTheme, MD2LightTheme} from 'react-native-paper';
import {MarketContext} from '../context/market-context/market-context-provider';
import {MarketContextType} from '../context/market-context/market-context-type';
export interface Notification {
  text: string;
  type: NotificationTypes;
}
interface CustomModal {
  iconName: string;
  color: string;
}

export const ModalNotification = ({
  visible,
  notification,
  toggleModal,
}: {
  visible: boolean;
  notification: Notification;
  toggleModal: () => void;
}) => {
  const {marketState} = useContext<MarketContextType>(MarketContext);
  const customizeModal = (type: NotificationTypes): CustomModal => {
    let content: CustomModal = {
      iconName: '',
      color: '',
    };
    if (type === 'info') {
      content = {
        iconName: 'info-circle',
        color: 'dodgerblue',
      };
    }
    if (type === 'warning') {
      content = {
        iconName: 'warning',
        color: 'goldenrod',
      };
    }
    return content;
  };
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={toggleModal}
        contentContainerStyle={{
          padding: 20,
          backgroundColor: !marketState.isDarkTheme
            ? MD2LightTheme.colors.background
            : MD3DarkTheme.colors.background,
          borderRadius: 20,
        }}
        style={{
          marginHorizontal: 20,
          marginVertical: 20,
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
          <FontAwesome
            size={20}
            color={customizeModal(notification.type).color}
            name={customizeModal(notification.type).iconName}
          />
          <Text
            style={{
              color: customizeModal(notification.type).color,
              marginLeft: 10,
            }}>
            {notification.text}
          </Text>
        </View>
      </Modal>
    </Portal>
  );
};
