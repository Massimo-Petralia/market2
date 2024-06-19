import {ToggleButton} from 'react-native-paper';
import {darkScheme} from './color-schemes/dark-color-scheme';
import {lightScheme} from './color-schemes/light-color-scheme';

import {
  PaperProvider,
  MD3LightTheme as DefaultTheme,
  MD3Theme,
  MD3Colors,
} from 'react-native-paper';
import React, {useState} from 'react';

const lightTheme: MD3Theme = {
  ...DefaultTheme,
  colors: lightScheme.colors,
  dark: false,
};

const darkTheme: MD3Theme = {
  ...DefaultTheme,
  colors: darkScheme.colors,
  dark: true,
};

export const ToggleTheme = () => {
  const [theme, setTheme] = useState<MD3Theme>(DefaultTheme);
  const [status, setStatus] = React.useState<
    'checked' | 'unchecked' | undefined
  >('checked');

  const onThemeToggle = () => {
    setTheme(status === 'checked' ? lightTheme : darkTheme);
    setStatus(status === 'checked' ? 'unchecked' : 'checked');
  };

  return (
    <>
      <ToggleButton
        style={{borderRadius: 50}}
        icon="theme-light-dark"
        status={status}
        onPress={() => onThemeToggle()}
      />
    </>
  );
};
