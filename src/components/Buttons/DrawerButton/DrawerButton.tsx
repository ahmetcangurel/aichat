import React, {FC} from 'react';
import {Text, TouchableOpacity, ViewStyle} from 'react-native';
import styles from './DrawerButton.Style';

type DrawerButtonProps = {
  title: string;
  onPress: () => void;
  icon: JSX.Element;
  customStyle?: ViewStyle;
};

const DrawerButton: FC<DrawerButtonProps> = ({
  title,
  onPress,
  icon,
  customStyle,
}) => {
  const Style = styles();
  return (
    <TouchableOpacity onPress={onPress} style={[Style.container, customStyle]}>
      {icon}
      <Text style={Style.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default DrawerButton;
