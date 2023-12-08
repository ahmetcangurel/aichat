import {createDrawerNavigator} from '@react-navigation/drawer';
import {Text, View} from 'react-native';
import Button from '../components/Buttons/Button/Button';
import {logout} from '../services/Firebase/Logout';
import useLoadingStore from '../store/useLoadingStore';

//Screens
import ChatScreen from '../screens/Main/ChatScreen/ChatScreen';
import SettingScreen from '../screens/Main/SettingScreen/SettingScreen';

const Drawer = createDrawerNavigator();

// const Feed = ({}) => {
//   const setLoading = useLoadingStore(state => state.setLoading);

//   return (
//     <View>
//       <Button
//         title="Logout"
//         onPress={async () => {
//           setLoading(true);
//           await logout();
//           setLoading(false);
//         }}
//       />
//     </View>
//   );
// };

// const Article = () => <Text>Article</Text>;

const MainDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="ChatScreen" component={ChatScreen} />
      <Drawer.Screen name="SettingScreen" component={SettingScreen} />
    </Drawer.Navigator>
  );
};

export default MainDrawer;
