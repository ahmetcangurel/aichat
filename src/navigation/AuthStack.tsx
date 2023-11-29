import {createStackNavigator} from '@react-navigation/stack';

//Screens
import WelcomeScreen from '../screens/Auth/WelcomeScreen/WelcomeScreen';
import LoginScreen from '../screens/Auth/LoginScreen/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen/RegisterScreen';
import TellAboutScreen from '../screens/Auth/RegisterScreen/TellAboutScreen/TellAboutScreen';
import VerifyPhoneScreen from '../screens/Auth/RegisterScreen/VerifyPhoneScreen/VerifyPhoneScreen';
import EnterVerifyCodeScreen from '../screens/Auth/RegisterScreen/EnterVerifyCodeScreen/EnterVerifyCodeScreen';

type AuthStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
  TellAbout: undefined;
  VerifyPhone: undefined;
  EnterVerifyCode: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen
        name="TellAbout"
        component={TellAboutScreen}
        options={{gestureEnabled: false}}
      />
      <Stack.Screen
        name="VerifyPhone"
        component={VerifyPhoneScreen}
        options={{gestureEnabled: false}}
      />
      <Stack.Screen
        name="EnterVerifyCode"
        component={EnterVerifyCodeScreen}
        options={{gestureEnabled: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
