import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

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

  return (
    <KeyboardAvoidingView>
      <ScrollView style={Style.container}>
        <SafeAreaView>
          {/* Header Content */}
          <View style={Style.headerContainer}>
            <SvgLogo width={64} height={64} color={colors.text.primary} />
            <Text style={Style.title}>Tell us about you</Text>
          </View>

          {/* Input - Button */}
          <Input
            placeholder="First Name"
            setValue={e => setFullName({...fullName, firstName: e})}
          />
          <Input
            placeholder="Last Name"
            setValue={e => setFullName({...fullName, lastName: e})}
          />
          <Button
            title="Continue"
            onPress={() => navigation.navigate('VerifyPhone')}
            type="primary"
          />

          {/* Footer Content */}
          <View style={Style.footerContainer}>
            <Text style={Style.footerText}>
              By clicking "Continue" you agree to our{' '}
              <Text
                onPress={() => console.log('Terms Pressed!')}
                style={Style.footerLink}>
                Terms
              </Text>{' '}
              and confirm you're 18 years or older.
            </Text>
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default TellAboutScreen;
