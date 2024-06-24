import {Product} from '../models/market-models';
import {MarketContext} from '../context/market-context/market-context-provider';
import {MarketContextType} from '../context/market-context/market-context-type';
import {useContext} from 'react';
import {MD3LightTheme, MD3DarkTheme, Button, Text} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {View} from 'react-native';
export const FormControls = () => {
  const {marketState} = useContext<MarketContextType>(MarketContext);
  return (
    <View>
      <View
        style={{
          alignSelf: 'flex-end',
          marginHorizontal: 20,
          marginVertical: 10,
          bottom: '100%',
        }}>
        <Button
          mode="contained"
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}
          onPress={() => 'placeholder'}>
          <FontAwesome5 name="save" size={16} />
          <Text
            style={{
              color: !marketState.isDarkTheme
                ? MD3LightTheme.colors.onPrimary
                : MD3DarkTheme.colors.onPrimary,
            }}>
            {' '}
            Save
          </Text>
        </Button>
      </View>
    </View>
  );
};
