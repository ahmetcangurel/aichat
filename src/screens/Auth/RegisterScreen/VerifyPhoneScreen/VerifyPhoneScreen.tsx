import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useTranslation} from 'react-i18next';
import auth from '@react-native-firebase/auth';

//styles
import styles from './VerifyPhoneScreen.Style';
import {useTheme} from '../../../../theme/ThemeProvider';

//components
import SvgLogo from '../../../../components/icons/Logo';
import Button from '../../../../components/Buttons/Button/Button';
import PhoneNumberInput from '../../../../components/Inputs/PhoneNumberInput/PhoneNumberInput';
import NativePicker from '../../../../components/NativePicker/NativePicker';
import {updatePhoneNumber} from '../../../../services/Firebase/UpdateProfile';
import useLoadingStore from '../../../../store/useLoadingStore';

type RegisterScreenProps = {
  navigation: StackNavigationProp<any>;
};

const VerifyPhoneScreen = ({navigation}: RegisterScreenProps) => {
  const [regionCode, setRegionCode] = useState<string>('+90');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const {colors} = useTheme();
  const Style = styles();
  const {t} = useTranslation();
  const setLoading = useLoadingStore(state => state.setLoading);

  const handleSendCode = async () => {
    if (phoneNumber.length >= 10) {
      setLoading(true);
      //TODO: Çalışmıyor
      await updatePhoneNumber(`${regionCode}${phoneNumber}`);
      setLoading(false);
      navigation.navigate('EnterVerifyCode');
    } else {
      console.log('Please enter your phone number');
    }
  };

  const currentUser = auth().currentUser;

  useEffect(() => {
    console.log(currentUser);
  }, []);

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
            onPress={() => handleSendCode()}
            type="primary"
          />
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default VerifyPhoneScreen;
