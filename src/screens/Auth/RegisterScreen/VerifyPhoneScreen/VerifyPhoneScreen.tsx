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
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

//styles
import styles from './VerifyPhoneScreen.Style';
import {useTheme} from '../../../../theme/ThemeProvider';

//custom hooks
import useLoadingStore from '../../../../store/useLoadingStore';

//components
import SvgLogo from '../../../../components/icons/Logo';
import Button from '../../../../components/Buttons/Button/Button';
import PhoneNumberInput from '../../../../components/Inputs/PhoneNumberInput/PhoneNumberInput';
import NativePicker from '../../../../components/NativePicker/NativePicker';
import useNewUserStore from '../../../../store/useNewUserStore';

type RegisterScreenProps = {
  navigation: StackNavigationProp<any>;
  route: any;
};

const VerifyPhoneScreen = ({navigation}: RegisterScreenProps) => {
  const [regionCode, setRegionCode] = useState<string>('+90');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const {colors} = useTheme();
  const Style = styles();
  const {t} = useTranslation();
  const setLoading = useLoadingStore(state => state.setLoading);
  const {newUser, setNewUser} = useNewUserStore(state => ({
    setNewUser: state.setNewUser,
    newUser: state.newUser,
  }));

  const handleSendCode = async () => {
    setLoading(true);
    setNewUser({...newUser, phoneNumber: phoneNumber, regionCode: regionCode});
    await auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(async userCredential => {
        // Signed in
        const {uid} = userCredential.user;
        await firestore()
          .collection('users')
          .doc(uid)
          .set({
            bio: newUser.bio,
            createdAt: firestore.Timestamp.fromDate(new Date()),
            email: newUser.email,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            phoneNumber: newUser.phoneNumber,
            photoUrl: '',
            regionCode: newUser.regionCode,
            uid: uid,
            updatedAt: firestore.Timestamp.fromDate(new Date()),
            password: newUser.password,
          });
      })
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
    setLoading(false);
  };

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
