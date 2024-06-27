import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native';
import {MarketContextProvider} from './app/context/market-context/market-context-provider';
import {RootNavigator} from './app/navigation/navigation';
import {PaperProviderWrapper} from './app/theming/theme-manager';
import {UserContextProvider} from './app/context/user-context/user-context-provider';
import {ModalNotification} from './app/components/modal-notification';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {MarketContext} from './app/context/market-context/market-context-provider';
import {MarketContextType} from './app/context/market-context/market-context-type';
import {adaptNavigationTheme} from 'react-native-paper';
import {ProductContextProvider} from './app/context/product-context/product-context-provider';
const {DarkTheme} = adaptNavigationTheme({reactNavigationDark: DefaultTheme});
const {LightTheme} = adaptNavigationTheme({reactNavigationLight: DefaultTheme});

function AppContent(): React.JSX.Element {
  const {marketState} = useContext<MarketContextType>(MarketContext);
  return (
    <SafeAreaView style={{flex: 1}}>
      <PaperProviderWrapper>
        <UserContextProvider>
          <NavigationContainer
            theme={!marketState.isDarkTheme ? LightTheme : DarkTheme}>
            <ProductContextProvider>
              <RootNavigator />
              <ModalNotification />
            </ProductContextProvider>
          </NavigationContainer>
        </UserContextProvider>
      </PaperProviderWrapper>
    </SafeAreaView>
  );
}

function App(): React.JSX.Element {
  return (
    <MarketContextProvider>
      <AppContent />
    </MarketContextProvider>
  );
}
export default App;
