import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {useThemeStore} from './src/store/useThemeStore';
import AuthStack from './src/navigation/AuthStack';

const App = () => {
  const isDarkTheme = useThemeStore(s => s.isDarkTheme);
  const toggleTheme = useThemeStore(s => s.toggleTheme);

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkTheme ? 'dark-content' : 'light-content'} />
      <AuthStack />
    </NavigationContainer>
  );
};

export default App;
