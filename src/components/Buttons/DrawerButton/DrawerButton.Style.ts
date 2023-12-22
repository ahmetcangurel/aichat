import {StyleSheet} from 'react-native';
import {useTheme} from '../../../theme/ThemeProvider';
const styles = () => {
  const {colors} = useTheme();

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 10,
      marginVertical: 8,
    },
    title: {
      color: colors.text.primary,
      fontSize: 16,
      marginLeft: 10,
    },
  });
};

export default styles;
