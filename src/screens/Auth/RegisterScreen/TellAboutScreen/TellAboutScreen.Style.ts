import {StyleSheet, Dimensions} from 'react-native';
import {useTheme} from '../../../../theme/ThemeProvider';

const styles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background.default,
      paddingHorizontal: 12,
    },
    headerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 32,
    },
    title: {
      fontSize: 20,
      fontWeight: '500',
      color: colors.text.primary,
      textAlign: 'center',
      marginTop: 24,
    },
    footerContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 24,
    },
    footerText: {
      fontSize: 14,
      fontWeight: '400',
      color: colors.text.primary,
      textAlign: 'center',
    },
    footerLink: {
      fontSize: 14,
      fontWeight: '500',
      color: colors.primary.main,
      textAlign: 'center',
    },
  });
};

export default styles;
