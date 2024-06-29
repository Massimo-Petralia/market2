import {useContext} from 'react';
import {View, StatusBar} from 'react-native';
import {MarketContext} from '../context/market-context/market-context-provider';
import {MarketContextType} from '../context/market-context/market-context-type';
import {
  PaperProvider,
  MD3LightTheme as DefaultTheme,
  MD3DarkTheme,
  useTheme,
} from 'react-native-paper';
import {ToggleButton} from 'react-native-paper';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import tinycolor2 from 'tinycolor2';
export const ToggleLightDarkTheme = () => {
  const theme = useTheme();
  const {marketState, updateTheme} =
    useContext<MarketContextType>(MarketContext);
  const setBottomNavColor = (color: string) => {
    changeNavigationBarColor(color, undefined, false);
  };
  const onThemeToggle = () => {
    updateTheme(!marketState.isDarkTheme);
  };

  const color: string = tinycolor2(theme.colors.onBackground).toHexString();

  return (
    <View
      style={{
        backgroundColor: theme.colors.background,
        alignItems: 'flex-end',
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
        backgroundColor={theme.colors.background}
        barStyle={!marketState.isDarkTheme ? 'dark-content' : 'light-content'}
      />
      <PaperProvider theme={theme}>{children}</PaperProvider>
    </>
  );
};
