import {StyleSheet} from 'react-native';
import {useTheme} from '../../theme/ThemeProvider';

const styles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {
      height: 60,
      width: '90%',
      borderRadius: 10,
      justifyContent: 'center',
      paddingHorizontal: 15,
      marginTop: 12,
    },
    icon: {
      position: 'absolute',
      top: 18,
      right: 15,
      color: colors.white.main,
    },
    title: {
      fontSize: 14,
      color: colors.white.main,
      fontWeight: 'bold',
      marginBottom: 4,
    },
    description: {
      fontSize: 14,
      color: colors.white.main,
    },
  });
};

export default styles;
