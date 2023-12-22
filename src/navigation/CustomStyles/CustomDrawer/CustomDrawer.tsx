import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import styles from './CustomDrawer.Style';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import {useTheme} from '../../../theme/ThemeProvider';
import DrawerButton from '../../../components/Buttons/DrawerButton/DrawerButton';
import SvgTrash from '../../../components/icons/Trash';
import SvgUser from '../../../components/icons/User';
import SvgEnlarge from '../../../components/icons/Enlarge';
import SvgContrast from '../../../components/icons/Contrast';
import SvgMoon from '../../../components/icons/Moon';
import SvgLogout from '../../../components/icons/Logout';

import {logout} from '../../../services/Firebase/Logout';

const CustomDrawer = (props: DrawerContentComponentProps) => {
  const {colors, dark, setScheme} = useTheme();
  const Style = styles();

  const handleChangeTheme = () => {
    setScheme(dark ? 'light' : 'dark');
  };

  return (
    <SafeAreaView style={Style.container}>
      {/* <DrawerItemList {...props} /> */}
      <View style={Style.userContainer}>
        <View style={Style.userPhotoContainer}>
          <Text style={Style.userPhoto}>CG</Text>
        </View>
        <Text style={Style.username}>Can Gürel</Text>
      </View>
      <ScrollView style={Style.chatListContainer}>
        <DrawerButton
          icon={<SvgTrash width={24} height={24} color={colors.text.primary} />}
          title="Clear conversations"
          onPress={() => console.log('Pressed!')}
        />
        <DrawerButton
          icon={
            dark ? (
              <SvgContrast width={24} height={24} color={colors.text.primary} />
            ) : (
              <SvgMoon width={24} height={24} color={colors.text.primary} />
            )
          }
          title={dark ? 'Light Mode' : 'Dark mode'}
          onPress={() => handleChangeTheme()}
        />
        <DrawerButton
          icon={<SvgTrash width={24} height={24} color={colors.text.primary} />}
          title="Clear conversations"
          onPress={() => console.log('Pressed!')}
        />
        <DrawerButton
          icon={
            dark ? (
              <SvgContrast width={24} height={24} color={colors.text.primary} />
            ) : (
              <SvgMoon width={24} height={24} color={colors.text.primary} />
            )
          }
          title={dark ? 'Light Mode' : 'Dark mode'}
          onPress={() => handleChangeTheme()}
        />
      </ScrollView>
      <View>
        <DrawerButton
          icon={<SvgTrash width={24} height={24} color={colors.text.primary} />}
          title="Clear conversations"
          onPress={() => console.log('Pressed!')}
        />
        <DrawerButton
          icon={
            dark ? (
              <SvgContrast width={24} height={24} color={colors.text.primary} />
            ) : (
              <SvgMoon width={24} height={24} color={colors.text.primary} />
            )
          }
          title={dark ? 'Light Mode' : 'Dark mode'}
          onPress={() => handleChangeTheme()}
        />
        <DrawerButton
          icon={<SvgUser width={24} height={24} color={colors.text.primary} />}
          title="Upgrade to Plus"
          onPress={() => console.log('Pressed!')}
        />
        <DrawerButton
          icon={
            <SvgEnlarge width={24} height={24} color={colors.text.primary} />
          }
          title="Updates & FAQ"
          onPress={() => console.log('Pressed!')}
        />
        <DrawerButton
          icon={
            <SvgLogout width={24} height={24} color={colors.text.primary} />
          }
          title="Log out"
          onPress={logout}
        />
      </View>
    </SafeAreaView>
  );
};

export default CustomDrawer;
