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
      paddingHorizontal: 10,
      marginVertical: 12,
    },
    input: {
      flex: 1,
      color: colors.text.primary,
      fontSize: 16,
      paddingHorizontal: 10,
    },
    eyeButton: {
      position: 'absolute',
      right: 12,
      top: 12,
    },
  });
};

export default styles;
