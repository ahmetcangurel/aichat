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
import styles from './EnterVerifyCodeScreen.Style';
import {useTheme} from '../../../../theme/ThemeProvider';

//components
import SvgLogo from '../../../../components/icons/Logo';
import Button from '../../../../components/Buttons/Button/Button';
import Input from '../../../../components/Inputs/Input/Input';
import {useTranslation} from 'react-i18next';

type RegisterScreenProps = {
  navigation: StackNavigationProp<any>;
};

type FullNameProps = {
  firstName: string;
  lastName: string;
};

const EnterVerifyCodeScreen = ({navigation}: RegisterScreenProps) => {
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
            <Text style={Style.title}>{t('auth.entercode')}</Text>
            <Text style={Style.subtitle}>{t('auth.entercodedesc')}</Text>
          </View>

          {/* Input - Button */}
          <Input
            placeholder="0000"
            setValue={e => setFullName({...fullName, firstName: e})}
          />
          <Button
            title={t('auth.continue')}
            onPress={() => console.log('Continue')}
            type="outlined"
          />
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default EnterVerifyCodeScreen;
