/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {TouchableOpacity} from 'react-native';

TouchableOpacity.defaultProps = {
  activeOpacity: 0.7,
};

AppRegistry.registerComponent(appName, () => App);
