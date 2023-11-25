import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useTranslation} from 'react-i18next';

//styles
import styles from './TellAboutScreen.Style';
import {useTheme} from '../../../../theme/ThemeProvider';

//components
import SvgLogo from '../../../../components/icons/Logo';
import Button from '../../../../components/Buttons/Button/Button';
import Input from '../../../../components/Inputs/Input/Input';

type RegisterScreenProps = {
  navigation: StackNavigationProp<any>;
};

type FullNameProps = {
  firstName: string;
  lastName: string;
};

const TellAboutScreen = ({navigation}: RegisterScreenProps) => {
  const [fullName, setFullName] = useState<FullNameProps>({
    firstName: '',
    lastName: '',
  });
  const {colors} = useTheme();
  const Style = styles();
  const {t} = useTranslation();

  return (
    <KeyboardAvoidingView>
      <ScrollView style={Style.container}>
        <SafeAreaView>
          {/* Header Content */}
          <View style={Style.headerContainer}>
            <SvgLogo width={64} height={64} color={colors.text.primary} />
            <Text style={Style.title}>{t('auth.tellusaboutyou')}</Text>
          </View>

          {/* Input - Button */}
          <Input
            placeholder={t('auth.firstname')}
            setValue={e => setFullName({...fullName, firstName: e})}
          />
          <Input
            placeholder={t('auth.lastname')}
            setValue={e => setFullName({...fullName, lastName: e})}
          />
          <Button
            title={t('auth.continue')}
            onPress={() => navigation.navigate('VerifyPhone')}
            type="primary"
          />

          {/* Footer Content */}
          <View style={Style.footerContainer}>
            <Text style={Style.footerText}>
              {t('auth.termsdesc1')}
              <Text
                onPress={() => console.log('Terms Pressed!')}
                style={Style.footerLink}>
                {t('auth.terms')}
              </Text>
              {t('auth.termsdesc2')}
            </Text>
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default TellAboutScreen;
