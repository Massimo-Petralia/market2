import React from 'react';
import {SafeAreaView} from 'react-native';
import {MarketContextProvider} from './app/context/market-context/market-context-provider';
import {RootNavigator} from './app/navigation/navigation';
import {PaperProviderWrapper} from './app/theming/theme-manager';
import {UserContextProvider} from './app/context/user-context/user-context-provider';
import {ModalNotification} from './app/components/modal-notification';

function App(): React.JSX.Element {
  return (
    <MarketContextProvider>
      <SafeAreaView style={{flex: 1}}>
        <PaperProviderWrapper>
            <UserContextProvider>
              <RootNavigator />
            </UserContextProvider>
            <ModalNotification/>
        </PaperProviderWrapper>
      </SafeAreaView>
    </MarketContextProvider>
  );
}

export default App;
