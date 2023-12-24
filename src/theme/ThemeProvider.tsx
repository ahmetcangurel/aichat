// import React, {createContext, useContext, useEffect, useState} from 'react';
// import {useColorScheme} from 'react-native';
// import {DarkTheme, DefaultTheme} from './colors';

// export const ThemeContext = createContext({
//   dark: false,
//   colors: DefaultTheme,
//   setScheme: (scheme: string) => {},
// });

// export const ThemeProvider = ({children}: any) => {
//   const colorScheme = useColorScheme();
//   const [isDark, setIsDark] = useState(colorScheme == 'dark');

//   useEffect(() => {
//     setIsDark(colorScheme == 'dark');
//   }, [colorScheme]);

//   const defaultTheme = {
//     dark: isDark,
//     colors: isDark ? DarkTheme : DefaultTheme,
//     setScheme: (scheme: string) => setIsDark(scheme == 'dark'),
//   };

//   return (
//     <ThemeContext.Provider value={defaultTheme}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => useContext(ThemeContext);

//how to add async storage

import React, {createContext, useContext, useEffect, useState} from 'react';
import {useColorScheme} from 'react-native';
import {DarkTheme, DefaultTheme} from './colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ThemeContext = createContext({
  dark: false,
  colors: DefaultTheme,
  setScheme: (scheme: string) => {},
});

export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
  const colorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(colorScheme == 'dark');

  useEffect(() => {
    AsyncStorage.getItem('dark').then((value) => {
      if (value == 'true') {
        setIsDark(true);
      } else {
        setIsDark(false);
      }
    });
  }, []);

  const defaultTheme = {
    dark: isDark,
    colors: isDark ? DarkTheme : DefaultTheme,
    setScheme: (scheme: string) => {
      AsyncStorage.setItem('dark', scheme == 'dark' ? 'true' : 'false');
      setIsDark(scheme == 'dark');
    },
  };

  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
