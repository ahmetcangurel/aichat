import {createDrawerNavigator} from '@react-navigation/drawer';
import {Text, View} from 'react-native';
import Button from '../components/Buttons/Button/Button';
import {logout} from '../services/Firebase/Logout';
import useLoadingStore from '../store/useLoadingStore';

const Drawer = createDrawerNavigator();

const Feed = ({}) => {
  const setLoading = useLoadingStore(state => state.setLoading);

  return (
    <View>
      <Button
        title="Logout"
        onPress={async () => {
          setLoading(true);
          await logout();
          setLoading(false);
        }}
      />
    </View>
  );
};

const Article = () => <Text>Article</Text>;

const MainDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
};

export default MainDrawer;
