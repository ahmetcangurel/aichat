import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AuthStack from './src/navigation/AuthStack';
import {ThemeProvider} from './src/theme/ThemeProvider';
import LoadingModal from './src/components/Modals/LoadingModal/LoadingModal';
import useLoadingStore from './src/store/useLoadingStore';
import {useTranslation} from 'react-i18next';
import Toast from 'react-native-toast-message';
import ToastConfig from './src/components/ToastMessages/ToastConfig';

const App = () => {
  const theme = useColorScheme();
  const loading = useLoadingStore(state => state.loading);
  const {i18n} = useTranslation();

  useEffect(() => {
    AsyncStorage.getItem('dark').then(value => {
      if (value == 'true') {
        console.log('Theme Mode: Dark');
      } else {
        console.log('Theme Mode: Light');
      }
    });

    AsyncStorage.getItem('lang').then(res => {
      console.log('Language: ', res);
      if (res == null) {
        AsyncStorage.setItem('lang', 'en');
        i18n.changeLanguage('en');
      } else {
        i18n.changeLanguage(res);
      }
    });
  }, []);

  return (
    <>
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
      <Toast config={ToastConfig} />
    </>
  );
};

export default App;
