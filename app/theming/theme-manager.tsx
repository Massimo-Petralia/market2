import {useContext} from 'react';
import {View, StatusBar} from 'react-native';
import {MarketContext} from '../context/market-context/market-context-provider';
import {MarketContextType} from '../context/market-context/market-context-type';
import {
  PaperProvider,
  MD3LightTheme as DefaultTheme,
  MD3DarkTheme,
} from 'react-native-paper';
import {ToggleButton} from 'react-native-paper';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import tinycolor2 from 'tinycolor2';
export const ToggleLightDarkTheme = () => {
  const {marketState, updateTheme} = useContext<MarketContextType>(MarketContext);
  const setBottomNavColor = (color: string) => {
    changeNavigationBarColor(color, undefined, false);
  };
  const onThemeToggle = () => {
    updateTheme(!marketState.isDarkTheme);
  };

  const color: string = !marketState.isDarkTheme
    ? tinycolor2('rgba(28, 27, 31, 1)').toHexString()
    : tinycolor2('rgba(255, 251, 254, 1)').toHexString();

  return (
    <View
      style={{
        backgroundColor: !marketState.isDarkTheme
          ? DefaultTheme.colors.background
          : MD3DarkTheme.colors.background,
          alignItems: 'flex-end'
      }}>
      <ToggleButton
        style={{borderRadius: 50}}
        icon="theme-light-dark"
        onPress={() => {
          onThemeToggle();
          setBottomNavColor(color);
        }}
        size={20}
      />
    </View>
  );
};
export const PaperProviderWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const {marketState} = useContext<MarketContextType>(MarketContext);
  const theme = !marketState.isDarkTheme ? DefaultTheme : MD3DarkTheme;
  return (
    <>
      <StatusBar
        backgroundColor={
          !marketState.isDarkTheme
            ? DefaultTheme.colors.background
            : MD3DarkTheme.colors.background
        }
        barStyle={!marketState.isDarkTheme ? 'dark-content' : 'light-content'}
      />
      <PaperProvider theme={theme}>{children}</PaperProvider>
    </>
  );
};
