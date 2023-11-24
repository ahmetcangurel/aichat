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
import styles from './VerifyPhoneScreen.Style';
import {useTheme} from '../../../../theme/ThemeProvider';

//components
import SvgLogo from '../../../../components/icons/Logo';
import Button from '../../../../components/Buttons/Button/Button';
import PhoneNumberInput from '../../../../components/Inputs/PhoneNumberInput/PhoneNumberInput';
import NativePicker from '../../../../components/NativePicker/NativePicker';

type RegisterScreenProps = {
  navigation: StackNavigationProp<any>;
};

const VerifyPhoneScreen = ({navigation}: RegisterScreenProps) => {
  const [regionCode, setRegionCode] = useState<string>('+90');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const {colors} = useTheme();
  const Style = styles();

  return (
    <KeyboardAvoidingView>
      <ScrollView style={Style.container}>
        <SafeAreaView>
          {/* Header Content */}
          <View style={Style.headerContainer}>
            <SvgLogo width={64} height={64} color={colors.text.primary} />
            <Text style={Style.title}>Verify your phone number</Text>
          </View>

          {/* Input - Button */}
          <NativePicker
            setValue={setRegionCode}
            placeholder="Select Region"
            searchPlaceholder="Search Region"
            notFoundText="Region Not Found"
          />
          <PhoneNumberInput
            setValue={setPhoneNumber}
            placeholder="(345) 123 4567"
            regionCode={regionCode}
          />
          <Button
            title="Send Code"
            onPress={() => navigation.navigate('EnterVerifyCode')}
            type="primary"
          />
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default VerifyPhoneScreen;
