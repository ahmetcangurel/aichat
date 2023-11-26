import auth from '@react-native-firebase/auth';

export const login = async (email: string, password: string) => {
  try {
    const res = await auth().signInWithEmailAndPassword(email, password);
    return res;
  } catch (error) {
    console.log('Sign In Error: ', error.message);
    return error;
  }
};
