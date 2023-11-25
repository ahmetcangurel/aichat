/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {TouchableOpacity, ScrollView, KeyboardAvoidingView} from 'react-native';
import './src/i18n/i18n';

TouchableOpacity.defaultProps = {
  activeOpacity: 0.7,
};

ScrollView.defaultProps = {
  showsVerticalScrollIndicator: false,
  showsHorizontalScrollIndicator: false,
};

KeyboardAvoidingView.defaultProps = {
  behavior: Platform.OS === 'ios' ? 'padding' : 'height',
  enabled: true,
  style: {flex: 1},
};

AppRegistry.registerComponent(appName, () => App);
