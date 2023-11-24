import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './PhoneNumberInput.Style';
import {useTheme} from '../../../theme/ThemeProvider';

type InputProps = {
  setValue: (e: string) => void;
  placeholder: string;
  regionCode?: string;
};

const PhoneNumberInput = ({placeholder, setValue, regionCode}: InputProps) => {
  const [input, setInput] = useState<string>('');
  const Style = styles();
  const {colors} = useTheme();
  return (
    <View style={Style.container}>
      <Text style={Style.regionCode}>{regionCode}</Text>
      <TextInput
        maxLength={10}
        autoCorrect={false}
        style={Style.input}
        keyboardType="phone-pad"
        placeholder={placeholder}
        placeholderTextColor={colors.text.disabled}
        value={input}
        onChangeText={(e: string) => {
          setInput(e);
          setValue(e);
        }}
      />
    </View>
  );
};

export default PhoneNumberInput;
