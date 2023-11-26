import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useTranslation} from 'react-i18next';

//styles
import styles from './LoginScreen.Style';
import {useTheme} from '../../../theme/ThemeProvider';

//components
import SvgLogo from '../../../components/icons/Logo';
import Button from '../../../components/Buttons/Button/Button';
import Input from '../../../components/Inputs/Input/Input';
import ButtonWithIcon from '../../../components/Buttons/ButtonWithIcon/ButtonWithIcon';
import SvgMicrosoft from '../../../components/icons/Microsoft';
import SvgGoogle from '../../../components/icons/Google';
import {login} from '../../../services/Firebase/Login';
import useLoadingStore from '../../../store/useLoadingStore';
import useUserStore from '../../../store/useUserStore';

type RegisterScreenProps = {
  navigation: StackNavigationProp<any>;
};

const LoginScreen = ({navigation}: RegisterScreenProps) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const {colors} = useTheme();
  const Style = styles();
  const {t} = useTranslation();
  const setLoading = useLoadingStore(state => state.setLoading);
  const setUser = useUserStore(state => state.setUser);

  const handleLogin = async () => {
    if (email.length !== 0 || password.length !== 0) {
      setLoading(true);
      await login(email, password).then(res => {
        console.log(res.user);
        setUser(res.user);
      });
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView>
      <ScrollView style={Style.container}>
        <SafeAreaView>
          {/* Header Content */}
          <View style={Style.headerContainer}>
            <SvgLogo width={64} height={64} color={colors.text.primary} />
            <Text style={Style.title}>{t('auth.loginyouraccount')}</Text>
            <Text style={Style.subtitle}>{t('auth.loginyouraccountdesc')}</Text>
          </View>

          {/* Input - Button */}
          <Input
            type="email-address"
            placeholder={t('auth.email')}
            setValue={setEmail}
          />
          <Input
            placeholder={t('auth.password')}
            setValue={setPassword}
            secureTextEntry
          />
          <Button
            title={t('auth.login')}
            onPress={() => handleLogin()}
            type={'primary'} // {email.length > 0 ? 'primary' : 'disabled'}
          />

          {/* Footer Content */}
          <View style={Style.footerContainer}>
            <Text style={Style.footerText}>
              {t('auth.dontyouhaveanaccount')}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={Style.footerLink}> {t('auth.signup')}</Text>
            </TouchableOpacity>
          </View>

          {/* OR */}
          <View style={Style.orContainer}>
            <View style={Style.orLine} />
            <Text style={Style.orText}>{t('auth.or')}</Text>
            <View style={Style.orLine} />
          </View>

          {/* Social Media Buttons */}
          <ButtonWithIcon
            title={t('auth.continuewithgoogle')}
            onPress={() => console.log('Continue with Google button pressed')}
            icon={<SvgGoogle width={20} height={20} />}
          />
          <ButtonWithIcon
            title={t('auth.continuewithmicrosoft')}
            onPress={() =>
              console.log('Continue with Microsoft button pressed')
            }
            icon={<SvgMicrosoft width={20} height={20} />}
          />
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
