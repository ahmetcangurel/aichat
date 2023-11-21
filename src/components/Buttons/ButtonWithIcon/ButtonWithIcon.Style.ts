import {StyleSheet} from 'react-native';
import {useTheme} from '../../../theme/ThemeProvider';

const styles = () => {
  const {colors} = useTheme();

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.background.default,
      borderWidth: 1,
      borderColor: colors.background.paper,
      borderRadius: 100,
      paddingHorizontal: 24,
      height: 52,
      marginVertical: 12,
    },
    title: {
      color: colors.text.primary,
      fontSize: 16,
      marginLeft: 12,
    },
  });
};

export default styles;
