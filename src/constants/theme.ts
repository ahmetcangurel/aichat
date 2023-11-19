interface Colors {
  light: string;
  main: string;
  dark: string;
}

const PRIMARY: Colors = {
  light: '#ADD7CC',
  main: '#4AA181',
  dark: '#4CA890',
};

// const SECONDARY: Colors = {
//   light: '#C684FF',
//   main: '#8E33FF',
//   dark: '#5119B7',
// };

// const INFO: Colors = {
//   light: '#61F3F3',
//   main: '#00B8D9',
//   dark: '#006C9C',
// };

const SUCCESS: Colors = {
  light: '#7BE188',
  main: '#00B42A',
  dark: '#009A29',
};

const WARNING: Colors = {
  light: '#FFCF8B',
  main: '#FF7D00',
  dark: '#D25F00',
};

const ERROR: Colors = {
  light: '#FBACA3',
  main: '#F53F3F',
  dark: '#CB2634',
};

const WHITE: Colors = {
  light: '#FFFFFF75',
  main: '#FFFFFF',
  dark: '#C1C1C1',
};

const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
};

const COMMON = {
  common: {
    black: '#000000',
    white: '#FFFFFF',
  },
  primary: PRIMARY,
  // secondary: SECONDARY,
  // info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  white: WHITE,
  divider: WHITE.dark,
};

const DefaultTheme = {
  ...COMMON,
  text: {primary: '#1D2129', secondary: '#5E6165', disabled: '#92979E'},
  background: {default: '#FFFFFF', neutral: '#F9F9F9', paper: '#E5E6EB'},
};

const DarkTheme = {
  ...COMMON,
  text: {primary: '#FFFFFF', secondary: '#D0D0D0', disabled: '#787878'},
  background: {default: '#202123', neutral: '#343541', paper: '#444654'},
};

// zustand returns a function that returns a theme object

import {useThemeStore} from '../store/useThemeStore';

export const useTheme = () => {
  const isDarkTheme = useThemeStore(state => state.isDarkTheme);
  return isDarkTheme ? DarkTheme : DefaultTheme;
};
