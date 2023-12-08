import React, {useEffect, useState} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTranslation} from 'react-i18next';

import {ThemeProvider} from './src/theme/ThemeProvider';
import LoadingModal from './src/components/Modals/LoadingModal/LoadingModal';
import useLoadingStore from './src/store/useLoadingStore';
import Toast from 'react-native-toast-message';
import ToastConfig from './src/components/ToastMessages/ToastConfig';
import {useTheme} from './src/theme/ThemeProvider';

//Navigation
import Navigation from './src/navigation';

const App = () => {
  // const theme = useColorScheme();
  const loading = useLoadingStore(state => state.loading);
  const {i18n} = useTranslation();
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    // AsyncStorage Theme Mode
    AsyncStorage.getItem('dark').then(value => {
      if (value == 'true') {
        setIsDark(true);
        console.log('Theme Mode: Dark');
      } else {
        setIsDark(false);
        console.log('Theme Mode: Light');
      }
    });

    // AsyncStorage Language
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
        <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
        {/* {theme == 'light' ? 'dark-content' : 'light-content'} */}
        <Navigation />
      </ThemeProvider>
      <Toast config={ToastConfig} />
    </>
  );
};

export default App;
