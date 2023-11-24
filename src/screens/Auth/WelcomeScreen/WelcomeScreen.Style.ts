import {StyleSheet, Dimensions, Platform} from 'react-native';
import {useTheme} from '../../../theme/ThemeProvider';

const styles = () => {
  const {width} = Dimensions.get('window');
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background.default,
    },
    headerContainer: {
      backgroundColor: colors.primary.main,
      height: width * (Platform.OS === 'ios' ? 0.8 : 0.5),
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 48,
    },
    contentContainer: {
      flex: 1,
      backgroundColor: colors.background.default,
      paddingHorizontal: 12,
    },
    title: {
      fontSize: 20,
      fontWeight: '500',
      color: colors.text.primary,
      textAlign: 'center',
      marginVertical: 8,
    },
    subtitle: {
      fontSize: 14,
      fontWeight: '400',
      color: colors.text.secondary,
      textAlign: 'center',
      marginVertical: 8,
    },
  });
};

export default styles;
