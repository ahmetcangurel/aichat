import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './Input.Style';
import {useTheme} from '../../../theme/ThemeProvider';
import SvgEye from '../../icons/Eye';
import SvgEyeClosed from '../../icons/EyeClosed';

type InputProps = {
  type?: 'default' | 'email-address' | 'number-pad';
  setValue: (e: string) => void;
  secureTextEntry?: boolean;
  placeholder: string;
};

const Input = ({
  type = 'default',
  placeholder,
  setValue,
  secureTextEntry = false,
}: InputProps) => {
  const [input, setInput] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const Style = styles();
  const {colors} = useTheme();
  return (
    <View style={Style.container}>
      <TextInput
        autoCapitalize="none"
        secureTextEntry={secureTextEntry ? showPassword : false}
        autoCorrect={false}
        style={Style.input}
        keyboardType={type}
        placeholder={placeholder}
        placeholderTextColor={colors.text.disabled}
        value={input}
        onChangeText={(e: string) => {
          setInput(e);
          setValue(e);
        }}
      />
      {secureTextEntry && (
        <TouchableOpacity
          style={Style.eyeButton}
          onPress={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <SvgEye width={24} height={24} color={colors.text.secondary} />
          ) : (
            <SvgEyeClosed
              width={24}
              height={24}
              color={colors.text.secondary}
            />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;
