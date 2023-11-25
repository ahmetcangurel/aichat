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
  const {t} = useTranslation();

  return (
    <KeyboardAvoidingView>
      <ScrollView style={Style.container}>
        <SafeAreaView>
          {/* Header Content */}
          <View style={Style.headerContainer}>
            <SvgLogo width={64} height={64} color={colors.text.primary} />
            <Text style={Style.title}>{t('auth.verifyyourphone')}</Text>
          </View>

          {/* Input - Button */}
          <NativePicker
            setValue={setRegionCode}
            placeholder={t('auth.selectregion')}
            searchPlaceholder={t('auth.searchregion')}
            notFoundText={t('auth.regionnotfound')}
          />
          <PhoneNumberInput
            setValue={setPhoneNumber}
            placeholder="(345) 123 4567"
            regionCode={regionCode}
          />
          <Button
            title={t('auth.sendcode')}
            onPress={() => navigation.navigate('EnterVerifyCode')}
            type="primary"
          />
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default VerifyPhoneScreen;
