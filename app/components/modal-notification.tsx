import {useState, useContext, useEffect} from 'react';
import {View} from 'react-native';
import {Modal, Portal, Text, Button, Icon} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {MD3DarkTheme, MD3LightTheme} from 'react-native-paper';
import {MarketContext} from '../context/market-context/market-context-provider';
import {MarketContextType} from '../context/market-context/market-context-type';
import {ProductContext} from '../context/product-context/product-context-provider';
import {ProductContextType} from '../context/product-context/product-context-types';
export type NotificationTypes = 'info' | 'warning' | 'delete';
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
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const {marketState} = useContext<MarketContextType>(MarketContext);
  const {product} = useContext<ProductContextType>(ProductContext);
  const customizeModal = (type: NotificationTypes): CustomModal => {
    let content: CustomModal = {
      iconName: '',
      color: '',
    };

    useEffect(() => {
      setIsVisible(visible);
    }, [visible]);

    if (type === 'info') {
      content = {
        iconName: 'info-circle',
        color: 'dodgerblue',
      };
    }
    if (type === 'warning') {
      content = {
        iconName: 'warning',
        color: !marketState.isDarkTheme
          ? MD3LightTheme.colors.tertiary
          : MD3DarkTheme.colors.tertiary,
      };
    }
    if (type === 'delete') {
      content = {
        iconName: 'warning',
        color: !marketState.isDarkTheme
          ? MD3LightTheme.colors.tertiary
          : MD3DarkTheme.colors.tertiary,
      };
    }
    return content;
  };
  return (
    <Portal>
      <Modal
        visible={isVisible}
        onDismiss={toggleModal}
        contentContainerStyle={{
          padding: 20,
          backgroundColor: !marketState.isDarkTheme
            ? MD3LightTheme.colors.background
            : MD3DarkTheme.colors.background,
          borderRadius: 20,
        }}
        style={{
          marginHorizontal: 20,
          marginVertical: 20,
          alignItems: 'center',
        }}>
        <View>
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
              {notification.type === 'delete'
                ? notification.text + ' ' + `${product.name}`
                : notification.text}
            </Text>
          </View>

          {notification.type === 'delete' ? (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 10,
              }}>
              <Button mode="contained" onPress={() => setIsVisible(!isVisible)}>
                No
              </Button>
              <Button mode="contained">Yes</Button>
            </View>
          ) : null}
        </View>
      </Modal>
    </Portal>
  );
};
