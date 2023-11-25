import {StyleSheet} from 'react-native';
import {useTheme} from '../../theme/ThemeProvider';

const styles = () => {
  const {colors} = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.primary.main,
    },
  });
};

export default styles;
