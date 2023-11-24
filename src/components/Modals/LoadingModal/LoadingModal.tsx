import React from 'react';
import {View, Animated, Modal} from 'react-native';

//styles
import styles from './LoadingModal.Style';
import {useTheme} from '../../../theme/ThemeProvider';
import SvgLogo from '../../icons/Logo';

type LoadingModalProps = {
  visible: boolean;
};

const LoadingModal = ({visible}: LoadingModalProps) => {
  const Style = styles();
  const {colors} = useTheme();
  const value = new Animated.Value(0);

  Animated.loop(
    Animated.timing(value, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }),
  ).start();

  const rotate = value.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => {}}>
      <View style={Style.container}>
        <Animated.View style={[{transform: [{rotate}]}]}>
          <SvgLogo width={64} height={64} color={colors.text.primary} />
        </Animated.View>
      </View>
    </Modal>
  );
};

export default LoadingModal;
