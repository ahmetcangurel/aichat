import React, {useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

//styles
import styles from './RegisterScreen.Style';
import {useTheme} from '../../../theme/ThemeProvider';

//components
import SvgLogo from '../../../components/icons/Logo';
import Button from '../../../components/Buttons/Button/Button';
import Input from '../../../components/Inputs/Input/Input';
import ButtonWithIcon from '../../../components/Buttons/ButtonWithIcon/ButtonWithIcon';
import SvgMicrosoft from '../../../components/icons/Microsoft';
import SvgGoogle from '../../../components/icons/Google';

type RegisterScreenProps = {
  navigation: StackNavigationProp<any>;
};

const RegisterScreen = ({navigation}: RegisterScreenProps) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const {colors} = useTheme();
  const Style = styles();

  return (
    <View style={Style.container}>
      <SafeAreaView>
        {/* Header Content */}
        <View style={Style.headerContainer}>
          <SvgLogo width={64} height={64} color={colors.text.primary} />
          <Text style={Style.title}>Create your account</Text>
          <Text style={Style.subtitle}>
            Please note that phone verification is required for signup. Your
            number will only be used to verify your identity for security
            purposes.
          </Text>
        </View>

        {/* Input - Button */}
        <Input
          type="email-address"
          placeholder="E-Mail Address"
          setValue={setEmail}
        />
        <Input placeholder="Password" setValue={setPassword} secureTextEntry />
        <Button
          title="Continue"
          onPress={() => navigation.navigate('TellAbout')}
          type={'primary'} // {email.length > 0 ? 'primary' : 'disabled'}
        />

        {/* Footer Content */}
        <View style={Style.footerContainer}>
          <Text style={Style.footerText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={Style.footerLink}> Login</Text>
          </TouchableOpacity>
        </View>

        {/* OR */}
        <View style={Style.orContainer}>
          <View style={Style.orLine} />
          <Text style={Style.orText}>OR</Text>
          <View style={Style.orLine} />
        </View>

        {/* Social Media Buttons */}
        <ButtonWithIcon
          title="Continue with Google"
          onPress={() => console.log('Continue with Google button pressed')}
          icon={<SvgGoogle width={20} height={20} />}
        />
        <ButtonWithIcon
          title="Continue with Microsoft"
          onPress={() => console.log('Continue with Microsoft button pressed')}
          icon={<SvgMicrosoft width={20} height={20} />}
        />
      </SafeAreaView>
    </View>
  );
};

export default RegisterScreen;
