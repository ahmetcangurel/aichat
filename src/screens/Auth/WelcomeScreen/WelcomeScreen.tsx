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
import {useTranslation} from 'react-i18next';

type WelcomeScreenProps = {
  navigation: StackNavigationProp<any>;
};

const WelcomeScreen = ({navigation}: WelcomeScreenProps) => {
  const {colors, dark, setScheme} = useTheme();
  const Style = styles();
  const {t} = useTranslation();

  //for loading animation
  const {data, error} = useGet('https://jsonplaceholder.typicode.com/todos/1');

  return (
    <ScrollView style={Style.container}>
      <View style={Style.headerContainer}>
        <SvgLogo width={64} height={64} color={colors.background.default} />
      </View>
      <SafeAreaView style={Style.contentContainer}>
        {/* Welcome Text */}
        <Text style={Style.title}>{t('auth.welcomechatgpt')}</Text>
        <Text style={Style.subtitle}>{t('auth.welcomechatgptdesc')}</Text>

        {/* Buttons */}
        <Button
          type={'primary'}
          title={t('auth.login')}
          onPress={() => navigation.navigate('Login')}
        />
        <Button
          type={'outlined'}
          title={t('auth.signup')}
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
