import React from 'react';
import {View, Text} from 'react-native';

//styles
import styles from './SettingScreen.Style';
import {useTheme} from '../../../theme/ThemeProvider';

const SettingScreen = () => {
  const Style = styles();
  const {colors} = useTheme();

  return (
    <View>
      <Text>SettingScreen</Text>
    </View>
  );
};

export default SettingScreen;
