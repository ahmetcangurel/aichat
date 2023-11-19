import React from 'react';
import {Text, StatusBar, SafeAreaView, TouchableOpacity} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {useThemeStore} from './src/store/useThemeStore';
import {useTheme} from './src/constants/theme';

const App = () => {
  const isDarkTheme = useThemeStore(s => s.isDarkTheme);
  const toggleTheme = useThemeStore(s => s.toggleTheme);
  const colors = useTheme();

  return (
    <SafeAreaProvider style={{flex: 1}}>
      <StatusBar barStyle={isDarkTheme ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <SafeAreaView>
          <TouchableOpacity
            onPress={() => toggleTheme()}
            style={{
              backgroundColor: colors.background.default,
            }}>
            <Text
              style={{
                color: colors.success.main,
              }}>
              App
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
