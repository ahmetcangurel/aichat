import auth from '@react-native-firebase/auth';

export const logout = async () => {
  try {
    const res = await auth().signOut();
    return res;
  } catch (error) {
    return error;
  }
};
