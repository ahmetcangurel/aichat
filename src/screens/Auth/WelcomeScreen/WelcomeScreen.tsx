import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';

//styles
import styles from './WelcomeScreen.Style';

//components
import SvgLogo from '../../../components/icons/Logo';
import {useTheme} from '../../../theme/ThemeProvider';
import Button from '../../../components/Button/Button';

type WelcomeScreenProps = {};

const WelcomeScreen = ({}: WelcomeScreenProps) => {
  const {colors} = useTheme();
  const Style = styles();

  return (
    <ScrollView style={Style.container}>
      <View style={Style.headerContainer}>
        <SvgLogo width={96} height={96} color={colors.background.default} />
      </View>
      <SafeAreaView style={Style.contentContainer}>
        {/* Welcome Text */}
        <Text style={Style.title}>Welcome to ChatGPT</Text>
        <Text style={Style.subtitle}>
          Log in with your OpenAI account to continue
        </Text>

        {/* Buttons */}
        <Button
          type={'primary'}
          title="LOG IN"
          onPress={() => console.log('LOG IN')}
        />
        <Button
          type={'outlined'}
          title="SIGN UP"
          onPress={() => console.log('SIGN UP')}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default WelcomeScreen;
