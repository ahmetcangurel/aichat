import {StyleSheet} from 'react-native';
import {useTheme} from '../../../theme/ThemeProvider';

const styles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      paddingVertical: 6,
      backgroundColor: colors.background.default,
      maxHeight: 200,
      justifyContent: 'center',
    },
    input: {
      backgroundColor: colors.background.default,
      color: colors.text.primary,
      borderWidth: 0.5,
      borderColor: colors.text.disabled,
      borderRadius: 2,
      paddingHorizontal: 12,
      paddingVertical: 8,
    },
    sendButton: {
      position: 'absolute',
      right: 18,
      bottom: 10,
    },
  });
};

export default styles;
