import {StyleSheet} from 'react-native';
import {useTheme} from '../../theme/ThemeProvider';

const styles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    boxStyles: {
      backgroundColor: colors.background.default,
      borderColor: colors.text.disabled,
      borderRadius: 100,
      borderWidth: 1,
      height: 52,
      alignItems: 'center',
    },
  });
};

export default styles;
