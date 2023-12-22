import {createDrawerNavigator} from '@react-navigation/drawer';
import {Text, View} from 'react-native';
import Button from '../components/Buttons/Button/Button';
import {logout} from '../services/Firebase/Logout';
import useLoadingStore from '../store/useLoadingStore';
import {useTheme} from '../theme/ThemeProvider';

//Screens
import ChatScreen from '../screens/Main/ChatScreen/ChatScreen';
import SettingScreen from '../screens/Main/SettingScreen/SettingScreen';
import CustomDrawer from './CustomStyles/CustomDrawer/CustomDrawer';

const Drawer = createDrawerNavigator();

const MainDrawer = () => {
  const {colors} = useTheme();

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        // drawerStyle: {
        //   backgroundColor: colors.background.default,
        // },
        // drawerActiveTintColor: colors.text.primary,
        // drawerActiveBackgroundColor: colors.background.paper,
        // drawerInactiveTintColor: colors.text.secondary,
        // drawerInactiveBackgroundColor: colors.background.neutral,
      }}>
      <Drawer.Screen name="ChatScreen" component={ChatScreen} />
      <Drawer.Screen name="SettingScreen" component={SettingScreen} />
    </Drawer.Navigator>
  );
};

export default MainDrawer;
