import {StyleSheet} from 'react-native';
import {useTheme} from '../../../theme/ThemeProvider';

const styles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {
      backgroundColor: colors.background.default,
      height: 54,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
    },
    title: {
      fontSize: 16,
      fontWeight: '500',
      color: colors.text.primary,
    },
  });
};

export default styles;
