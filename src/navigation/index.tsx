import {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import useUserStore from '../store/useUserStore';

//Navigation
import AuthStack from './AuthStack';
import MainDrawer from './Drawer';

const Navigation = () => {
  const setUser = useUserStore(state => state.setUser);
  const user = useUserStore(state => state.user);

  // Auth state listener
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return subscriber;
  }, []);

  return (
    <NavigationContainer>
      {user !== null ? <MainDrawer /> : <AuthStack />}
      {/* <AuthStack /> */}
    </NavigationContainer>
  );
};

export default Navigation;
