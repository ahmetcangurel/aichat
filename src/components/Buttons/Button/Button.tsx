import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './Button.Style';

type ButtonProps = {
  title: string;
  onPress: () => void;
  type?: 'primary' | 'outlined' | 'disabled';
};

const Button = ({type = 'primary', onPress, title}: ButtonProps) => {
  const Style = styles()[type];

  return (
    <TouchableOpacity
      disabled={type == 'disabled' ? true : false}
      onPress={onPress}
      style={Style.container}>
      <Text style={Style.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
