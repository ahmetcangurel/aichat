import {createStackNavigator} from '@react-navigation/stack';

//Screens
import WelcomeScreen from '../screens/Auth/WelcomeScreen/WelcomeScreen';
import LoginScreen from '../screens/Auth/LoginScreen/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen/RegisterScreen';

type AuthStackParamList = {
  WelcomeScreen: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="WelcomeScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
