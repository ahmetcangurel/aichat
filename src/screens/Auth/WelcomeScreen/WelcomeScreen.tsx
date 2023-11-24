import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

//styles
import styles from './WelcomeScreen.Style';

//components
import SvgLogo from '../../../components/icons/Logo';
import {useTheme} from '../../../theme/ThemeProvider';
import Button from '../../../components/Buttons/Button/Button';
import useGet from '../../../hooks/useGet';

type WelcomeScreenProps = {
  navigation: StackNavigationProp<any>;
};

const WelcomeScreen = ({navigation}: WelcomeScreenProps) => {
  const {colors, dark, setScheme} = useTheme();
  const Style = styles();
  const {data, error} = useGet('https://jsonplaceholder.typicode.com/todos/1');

  return (
    <ScrollView style={Style.container}>
      <View style={Style.headerContainer}>
        <SvgLogo width={64} height={64} color={colors.background.default} />
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
          onPress={() => navigation.navigate('Login')}
        />
        <Button
          type={'outlined'}
          title="SIGN UP"
          onPress={() => navigation.navigate('Register')}
        />

        {/* _DEV_ Change Theme Button */}
        <Button
          type={'outlined'}
          title="Change Theme"
          onPress={() => {
            setScheme(dark ? 'light' : 'dark');
          }}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default WelcomeScreen;
