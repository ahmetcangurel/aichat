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
import {updateDisplayName} from '../../../../services/Firebase/UpdateProfile';
import useLoadingStore from '../../../../store/useLoadingStore';

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
  const setLoading = useLoadingStore(state => state.setLoading);

  const handleUpdateName = async () => {
    if (fullName.firstName.length > 1 || fullName.lastName.length > 1) {
      setLoading(true);
      await updateDisplayName(fullName.firstName, fullName.lastName);
      setLoading(false);
      navigation.navigate('VerifyPhone');
    } else {
      console.log('Please enter your name');
    }
  };

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
            onPress={() => handleUpdateName()}
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
