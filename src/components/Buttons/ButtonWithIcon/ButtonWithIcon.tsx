import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './ButtonWithIcon.Style';

type ButtonProps = {
  title: string;
  onPress: () => void;
  icon: JSX.Element;
};

const ButtonWithIcon = ({icon, onPress, title}: ButtonProps) => {
  const Style = styles();

  return (
    <TouchableOpacity onPress={onPress} style={Style.container}>
      {icon}
      <Text style={Style.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonWithIcon;
