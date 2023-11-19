import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {styles} from './WelcomeScreen.Style';
import SvgLogo from '../../../components/icons/Logo';

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.headerContainer}>
        <SvgLogo width={24} height={24} />
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
