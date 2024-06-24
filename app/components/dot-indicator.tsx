import {View, StyleSheet} from 'react-native';
import {MD3LightTheme, MD3DarkTheme} from 'react-native-paper';
import {MarketContext} from '../context/market-context/market-context-provider';
import {MarketContextType} from '../context/market-context/market-context-type';
import {useContext} from 'react';

export const DotIndicator = ({
  index,
  counter,
}: {
  index: number;
  counter: number;
}) => {
  const {marketState} = useContext<MarketContextType>(MarketContext);
  const checkTheme = () => {
    if (!marketState.isDarkTheme) {
      return MD3LightTheme.colors.primary;
    } else return MD3DarkTheme.colors.primary;
  };
  return (
    <View
      style={[
        style.dot,
        {
          backgroundColor: index === counter ? checkTheme() : 'grey',
          height: index === counter ? 14 : 10,
          width: index === counter ? 14 : 10,
        },
      ]}></View>
  );
};

const style = StyleSheet.create({
  dot: {
    borderRadius: 50,
    width: 10,
    height: 10,
    marginHorizontal: 5,
    marginVertical: 5,
  },
});
