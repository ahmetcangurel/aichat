import {StyleSheet} from 'react-native';
import {useTheme} from '../../theme/ThemeProvider';

type StyleProps = {
  isUser: boolean;
};

const styles = ({isUser}: StyleProps) => {
  const {colors} = useTheme();

  const base = StyleSheet.create({
    container: {
      paddingHorizontal: 12,
      paddingVertical: 10,
      borderRadius: 2,
      marginVertical: 4,
    },
    message: {
      fontSize: 14,
      lineHeight: 20,
      maxWidth: '80%',
    },
    time: {
      fontSize: 10,
      color: colors.text.secondary,
      alignSelf: 'flex-end',
      marginTop: 5,
    },
  });

  if (isUser) {
    return StyleSheet.create({
      container: {
        ...base.container,
        backgroundColor: colors.background.paper,
        alignSelf: 'flex-end',
      },
      message: {
        ...base.message,
        color: colors.text.primary,
      },
      time: {
        ...base.time,
      },
    });
  } else {
    return StyleSheet.create({
      container: {
        ...base.container,
        backgroundColor: colors.background.default,
        alignSelf: 'flex-start',
      },
      message: {
        ...base.message,
        color: colors.text.primary,
      },
      time: {
        ...base.time,
      },
    });
  }
};

export default styles;
