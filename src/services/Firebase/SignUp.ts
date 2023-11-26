import auth from '@react-native-firebase/auth';

export const signUp = async (email: string, password: string) => {
  try {
    const res = await auth().createUserWithEmailAndPassword(email, password);
    return res;
  } catch (error) {
    console.log('SignUp Error: ', error.message);
    return error;
  }
};
