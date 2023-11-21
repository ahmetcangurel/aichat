import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AuthStack from './src/navigation/AuthStack';
import {ThemeProvider} from './src/theme/ThemeProvider';
import SplashScreen from './src/screens/SplashScreen/SplashScreen';

const App = () => {
  const theme = useColorScheme();
  console.log('Theme: ', theme);

  useEffect(() => {
    AsyncStorage.getItem('dark').then(value => {
      if (value == 'true') {
        console.log('Dark mode enabled');
      } else {
        console.log('Dark mode disabled');
      }
    });
  }, []);

  return (
    <ThemeProvider>
      <NavigationContainer>
        <StatusBar
          barStyle={theme == 'light' ? 'dark-content' : 'light-content'}
        />
        <AuthStack />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
