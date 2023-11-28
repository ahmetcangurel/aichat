import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import SvgStar from '../icons/Star';
import styles from './CustomToast.Style';

type CustomToastProps = {
  title?: string;
  description?: string;
  backgroundColor?: string;
  onPress?: () => void;
};

const CustomToast = ({
  title = 'Title',
  description = 'Description',
  onPress,
  backgroundColor,
}: CustomToastProps) => {
  const Style = styles();

  return (
    <TouchableOpacity
      style={[Style.container, {backgroundColor}]}
      onPress={onPress}>
      <SvgStar
        width={24}
        height={24}
        color={Style.icon.color}
        style={Style.icon}
      />
      <Text style={Style.title}>{title}</Text>
      <Text style={Style.description}>{description}</Text>
    </TouchableOpacity>
  );
};

export default CustomToast;
