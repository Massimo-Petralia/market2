import React from 'react';
import {SafeAreaView} from 'react-native';
import {MarketContextProvider} from './app/context/market-context/market-context-provider';
import {RootNavigator} from './app/navigation/navigation';
import { PaperProviderWrapper } from './app/theming/theme-manager';

function App(): React.JSX.Element {
  return (
    <MarketContextProvider>
      <SafeAreaView style={{flex: 1}}>
        <PaperProviderWrapper>
          <RootNavigator />
        </PaperProviderWrapper>
      </SafeAreaView>
    </MarketContextProvider>
  );
}

export default App;
