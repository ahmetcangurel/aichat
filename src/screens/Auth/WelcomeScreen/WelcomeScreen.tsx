import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useTranslation} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

//styles
import {useTheme} from '../../../theme/ThemeProvider';
import styles from './WelcomeScreen.Style';

//components
import SvgLogo from '../../../components/icons/Logo';
import Button from '../../../components/Buttons/Button/Button';
import Toast from 'react-native-toast-message';

type WelcomeScreenProps = {
  navigation: StackNavigationProp<any>;
};

const WelcomeScreen = ({navigation}: WelcomeScreenProps) => {
  const {colors, dark, setScheme} = useTheme();
  const Style = styles();
  const {t, i18n} = useTranslation();

  // _DEV_ Save async storage
  const handleChangeLanguage = async () => {
    await AsyncStorage.setItem('lang', i18n.language === 'en' ? 'tr' : 'en');
    i18n.changeLanguage(i18n.language === 'en' ? 'tr' : 'en');
    Toast.show({
      type: 'success',
      text1: 'Language Changed',
      text2: i18n.language === 'en' ? 'English' : 'Türkçe',
    });
  };

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

        {/* _DEV_ Test Button */}
        <Button
          type={'outlined'}
          title="Change Theme"
          onPress={() => {
            setScheme(dark ? 'light' : 'dark');
          }}
        />
        {/* _DEV_ Test Button */}
        <Button
          type={'outlined'}
          title="Change Language"
          onPress={() => handleChangeLanguage()}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default WelcomeScreen;
