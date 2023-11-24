import {StyleSheet} from 'react-native';
import {useTheme} from '../../../theme/ThemeProvider';

const styles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.background.default,
    },
  });
};

export default styles;
