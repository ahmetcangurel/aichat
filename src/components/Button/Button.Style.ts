import {StyleSheet, Dimensions} from 'react-native';
import {useTheme} from '../../theme/ThemeProvider';

const styles = () => {
  const {width} = Dimensions.get('window');
  const {colors} = useTheme();

  const base = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 52,
      borderRadius: 100,
      marginVertical: 12,
    },
    title: {
      fontSize: 16,
      fontWeight: '600',
    },
  });

  return StyleSheet.create({
    // primary button types
    primary: {
      container: {
        ...base.container,
        backgroundColor: colors.primary.main,
      },
      title: {
        ...base.title,
        color: colors.text.primary,
      },
    },
    outlined: {
      container: {
        ...base.container,
        backgroundColor: colors.background.default,
        borderColor: colors.primary.main,
        borderWidth: 1,
      },
      title: {
        ...base.title,
        color: colors.primary.main,
      },
    },
    disabled: {
      container: {
        ...base.container,
        backgroundColor: colors.background.paper,
      },
      title: {
        ...base.title,
        color: colors.text.disabled,
      },
    },
  });
};

export default styles;
