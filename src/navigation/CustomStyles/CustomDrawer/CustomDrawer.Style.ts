import {StyleSheet} from 'react-native';
import {useTheme} from '../../../theme/ThemeProvider';

const styles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background.default,
    },
    userContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 20,
    },
    userPhotoContainer: {
      borderRadius: 50,
      backgroundColor: colors.background.neutral,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
    },
    userPhoto: {
      padding: 8,
      color: colors.warning.main,
    },
    username: {
      fontWeight: '500',
      color: colors.text.primary,
    },
    chatListContainer: {
      paddingVertical: 10,
    },
  });
};

export default styles;
