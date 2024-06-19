import React from 'react';
import {SafeAreaView} from 'react-native';
import {MarketProvider} from './app/context/market-context-provider';
import {RootNavigator} from './app/navigation/navigation';
import {PaperProviderWrapper} from './app/theme/theming-component';
import {ToggleLightDarkTheme} from './app/theme/theming-component';

function App(): React.JSX.Element {
  return (
    <MarketProvider>
      <SafeAreaView style={{flex: 1}}>
        <PaperProviderWrapper>
          <ToggleLightDarkTheme />
          <RootNavigator />
        </PaperProviderWrapper>
      </SafeAreaView>
    </MarketProvider>
  );
}

export default App;
