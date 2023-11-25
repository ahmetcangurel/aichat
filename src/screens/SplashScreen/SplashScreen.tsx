import React from 'react';
import {View, Text, useWindowDimensions} from 'react-native';

//styles
import styles from './SplashScreen.Style';
import {useTheme} from '../../theme/ThemeProvider';

import SvgLogo from '../../components/icons/Logo';
import SvgDotsThree from '../../components/icons/DotsThree';

const SplashScreen = () => {
  const Style = styles();
  const {colors} = useTheme();
  const {width} = useWindowDimensions();

  return (
    <View style={Style.container}>
      <SvgLogo
        width={width * 0.3}
        height={width * 0.3}
        color={colors.common.white}
      />
      <SvgDotsThree
        width={width * 0.2}
        height={width * 0.2}
        color={colors.common.white}
      />
    </View>
  );
};

export default SplashScreen;
