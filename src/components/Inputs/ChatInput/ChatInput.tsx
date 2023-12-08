import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

//styles
import styles from './ChatInput.Style';
import {useTheme} from '../../../theme/ThemeProvider';

//components
import SvgSend from '../../icons/Send';

type Props = {
  placeholder: string;
  setVal: (value: string) => void;
  onPress: () => void;
};

const ChatInput = ({placeholder, setVal, onPress}: Props) => {
  const Style = styles();
  const {colors} = useTheme();
  const [value, setValue] = useState<string>('');

  return (
    <View style={Style.container}>
      <TextInput
        value={value}
        onChangeText={e => {
          setValue(e);
          setVal(e);
        }}
        multiline
        style={Style.input}
        placeholder={placeholder ?? 'Type a message...'}
        placeholderTextColor={colors.text.secondary}
      />
      <TouchableOpacity
        style={Style.sendButton}
        onPress={() => {
          onPress();
          setValue('');
        }}>
        <SvgSend width={24} height={24} color={colors.text.secondary} />
      </TouchableOpacity>
    </View>
  );
};

export default ChatInput;
