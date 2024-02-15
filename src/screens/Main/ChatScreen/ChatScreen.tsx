import React, {useState} from 'react';
import {View, SafeAreaView, KeyboardAvoidingView, FlatList} from 'react-native';
import {DrawerNavigationProp} from '@react-navigation/drawer';

//styles
import styles from './ChatScreen.Style';
import {useTheme} from '../../../theme/ThemeProvider';

//components
import MainHeader from '../../../components/Headers/MainHeader/MainHeader';
import ChatInput from '../../../components/Inputs/ChatInput/ChatInput';
import ChatItem from '../../../components/ChatItem/ChatItem';

//types
import { MessageItemTypes } from '../../../types';

type Props = {
  navigation: DrawerNavigationProp<any>;
};

const ChatScreen = ({navigation}: Props) => {
  const Style = styles();
  const {colors} = useTheme();

  const [inputValue, setInputValue] = useState<string>('');
  const [messages, setMessages] = useState<MessageItemTypes[]>([
    {
      id: 1,
      message: 'Hello',
      isUser: true,
      time: '12:00',
      date: '2021-01-01',
    },
    {
      id: 2,
      message: 'Hi',
      isUser: false,

      time: '12:00',
      date: '2021-01-01',
    },
    {
      id: 3,
      message: 'How are you?',
      isUser: true,
      time: '12:00',
      date: '2021-01-01',
    },
    {
      id: 4,
      message: 'Fine',
      isUser: false,
      time: '12:00',
      date: '2021-01-01',
    },
    {
      id: 5,
      message:
        'This way, each style object only contains properties that are valid for ViewStyle, TextStyle, or ImageStyle.',
      isUser: true,
      time: '12:00',
      date: '2021-01-01',
    },
    {
      id: 6,
      message:
        'To fix this, you should ensure that the properties youre assigning to your styles match the properties expected in ViewStyle, TextStyle, or ImageStyle.',
      isUser: false,
      time: '12:00',
      date: '2021-01-01',
    },
  ]);

  const handleSendMessage = () => {
    setMessages(prev => [
      ...prev,
      {
        id: messages.length + 1,
        message: inputValue,
        isUser: messages.length % 2 === 0,
        time: '12:00',
        date: '2021-01-01',
      },
    ]);
  };

  return (
    <SafeAreaView style={Style.container}>
      <MainHeader
        title="New Chat"
        onPressList={() => navigation.openDrawer()}
        onPressPlus={() => {}}
      />
      <KeyboardAvoidingView>
        <View style={Style.chatContainer}>
          <FlatList
            data={messages}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={Style.flatListContainer}
            renderItem={({item}) => <ChatItem content={item} />}
          />
        </View>
        <ChatInput
          placeholder="Hello"
          onPress={() => {
            handleSendMessage();
          }}
          setVal={e => {
            setInputValue(e);
          }}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreen;
