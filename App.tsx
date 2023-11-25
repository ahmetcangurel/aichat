import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AuthStack from './src/navigation/AuthStack';
import {ThemeProvider} from './src/theme/ThemeProvider';
import LoadingModal from './src/components/Modals/LoadingModal/LoadingModal';
import useLoadingStore from './src/store/useLoadingStore';
import SplashScreen from './src/screens/SplashScreen/SplashScreen';

const App = () => {
  const theme = useColorScheme();
  const loading = useLoadingStore(state => state.loading);

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
      <LoadingModal visible={loading} />
      <NavigationContainer>
        <StatusBar
          barStyle={theme == 'light' ? 'dark-content' : 'light-content'}
        />
        <AuthStack />
      </NavigationContainer>
      {/* <SplashScreen /> */}
    </ThemeProvider>
  );
};

export default App;
