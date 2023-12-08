import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

//styles
import styles from './MainHeader.Style';
import {useTheme} from '../../../theme/ThemeProvider';

//components
import SvgList from '../../icons/List';
import SvgPlus from '../../icons/Plus';

type Props = {
  title: string;
  onPressList: () => void;
  onPressPlus: () => void;
};

const MainHeader = ({title, onPressList, onPressPlus}: Props) => {
  const Style = styles();
  const {colors} = useTheme();
  return (
    <View style={Style.container}>
      <TouchableOpacity onPress={onPressList}>
        <SvgList width={24} height={24} color={colors.text.primary} />
      </TouchableOpacity>
      <Text style={Style.title}>{title}</Text>
      <TouchableOpacity onPress={onPressPlus}>
        <SvgPlus width={24} height={24} color={colors.text.primary} />
      </TouchableOpacity>
    </View>
  );
};

export default MainHeader;
