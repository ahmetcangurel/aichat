import React, {Fragment} from 'react';
import {View, Text, Image} from 'react-native';

//styles
import styles from './ChatItem.Style';
import {useTheme} from '../../theme/ThemeProvider';
import SvgLogo from '../icons/Logo';

export type MessageItemProps = {
  message: string;
  isUser: boolean;
  date: string;
  time: string;
};

type Props = {
  content: MessageItemProps;
};

const ChatItem = ({content}: Props) => {
  const Style = styles({isUser: content.isUser});
  const {colors} = useTheme();

  return (
    <View style={Style.container}>
      <Text style={Style.message}>{content.message}</Text>
      <Text style={Style.time}>{content.time}</Text>
    </View>
  );
};

export default ChatItem;
