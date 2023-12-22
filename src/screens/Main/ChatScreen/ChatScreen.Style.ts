import {StyleSheet} from 'react-native';
import {useTheme} from '../../../theme/ThemeProvider';

const styles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background.default,
    },
    chatContainer: {
      flex: 1,
      backgroundColor: colors.background.neutral,
      paddingHorizontal: 12,
    },
    flatListContainer: {
      justifyContent: 'flex-end',
    },
  });
};

export default styles;
