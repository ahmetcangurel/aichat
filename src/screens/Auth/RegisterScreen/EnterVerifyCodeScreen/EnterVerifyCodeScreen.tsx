import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

//styles
import styles from './EnterVerifyCodeScreen.Style';
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

const EnterVerifyCodeScreen = ({navigation}: RegisterScreenProps) => {
  const [fullName, setFullName] = useState<FullNameProps>({
    firstName: '',
    lastName: '',
  });
  const {colors} = useTheme();
  const Style = styles();

  return (
    <View style={Style.container}>
      <SafeAreaView>
        {/* Header Content */}
        <View style={Style.headerContainer}>
          <SvgLogo width={64} height={64} color={colors.text.primary} />
          <Text style={Style.title}>Enter Code</Text>
          <Text style={Style.subtitle}>
            Please enter the code we just sent you.
          </Text>
        </View>

        {/* Input - Button */}
        <Input
          placeholder="0000"
          setValue={e => setFullName({...fullName, firstName: e})}
        />
        <Button
          title="Continue"
          onPress={() => console.log('Continue')}
          type="outlined"
        />
      </SafeAreaView>
    </View>
  );
};

export default EnterVerifyCodeScreen;
