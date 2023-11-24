import {StyleSheet} from 'react-native';
import {useTheme} from '../../../theme/ThemeProvider';

const styles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {
      height: 50,
      borderWidth: 1,
      borderColor: colors.text.disabled,
      borderRadius: 100,
      paddingHorizontal: 14,
      marginVertical: 12,
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      flex: 1,
      color: colors.text.primary,
      fontSize: 16,
      paddingHorizontal: 10,
    },
    regionCode: {
      fontSize: 14,
      color: colors.text.primary,
    },
  });
};

export default styles;
