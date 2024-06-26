import {useContext, useEffect} from 'react';
import {View} from 'react-native';
import {Modal, Portal, Text, Button} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {MD3DarkTheme, MD3LightTheme} from 'react-native-paper';
import {MarketContext} from '../context/market-context/market-context-provider';
import {MarketContextType} from '../context/market-context/market-context-type';
import {ProductContext} from '../context/product-context/product-context-provider';
import {ProductContextType} from '../context/product-context/product-context-types';
import {NotificationTypes} from '../models/market-models';
import {UserContext} from '../context/user-context/user-context-provider';
import {UserContextType} from '../context/user-context/user-context-types';

interface CustomModal {
  iconName: string;
  color: string;
}

export const ModalNotification = () => {
  const {marketState, toggleModal} =
    useContext<MarketContextType>(MarketContext);
  const {product, onDeleteProduct} =
    useContext<ProductContextType>(ProductContext);
  const {user} = useContext<UserContextType>(UserContext);
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
  // useEffect(() => {
  //   setIsVisible(visible);
  // }, [visible]);
  return (
    <Portal>
      <Modal
        theme={{colors: {backdrop: 'rgba(128, 128, 128, 0.6)'}}}
        visible={marketState.modalVisibility}
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
              color={customizeModal(marketState.notification.type).color}
              name={customizeModal(marketState.notification.type).iconName}
            />
            <Text
              style={{
                color: customizeModal(marketState.notification.type).color,
                marginLeft: 10,
              }}>
              {marketState.notification.type === 'delete'
                ? marketState.notification.text + ' ' + `${product.name}`
                : marketState.notification.text}
            </Text>
          </View>

          {marketState.notification.type === 'delete' ? (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 10,
              }}>
              <Button mode="contained" onPress={() => toggleModal()}>
                No
              </Button>
              <Button
                mode="contained"
                onPress={() => {
                  if (product.id) {
                    onDeleteProduct(product.id, user.accessTokken);
                  }
                  toggleModal()
                }}>
                Yes
              </Button>
            </View>
          ) : null}
        </View>
      </Modal>
    </Portal>
  );
};
