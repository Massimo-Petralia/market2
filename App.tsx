import React from 'react';
import {SafeAreaView} from 'react-native';
import {MarketProvider} from './app/context/market-context-provider';
import {RootNavigator} from './app/navigation/navigation';
import {PaperProviderWrapper} from './app/modules/theming-module';

function App(): React.JSX.Element {
  return (
    <MarketProvider>
      <SafeAreaView style={{flex: 1}}>
        <PaperProviderWrapper>
          <RootNavigator />
        </PaperProviderWrapper>
      </SafeAreaView>
    </MarketProvider>
  );
}

export default App;
