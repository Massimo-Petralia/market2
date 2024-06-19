import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {MarketProvider} from './app/context/market-context-provider';
import {RootNavigator} from './app/navigation/navigation';

import {PaperProvider, MD3LightTheme as DefaultTheme} from 'react-native-paper';

const darkTheme = {
  ...DefaultTheme
};
function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <PaperProvider theme={darkTheme} >
      <SafeAreaView style={[backgroundStyle, {flex: 1}]}>
        <StatusBar
          //  barStyle={darkTheme.colors.background ? 'light-content' : 'dark-content'}
          // backgroundColor={darkTheme.colors.background}
        />
        <MarketProvider>
          <RootNavigator />
        </MarketProvider>
      </SafeAreaView>
    </PaperProvider>
  );
}

export default App;
