import auth from '@react-native-firebase/auth';

export const updateDisplayName = async (
  firstName: string,
  lastName: string,
) => {
  try {
    const res = await auth().currentUser?.updateProfile({
      displayName: `${firstName} ${lastName}`,
    });
    return res;
  } catch (error) {
    console.log('Update Profile Error: ', (error as Error).message);
    return error;
  }
};

//TODO: Çalışmıyor
export const updatePhoneNumber = async (phoneNumber: string) => {
  try {
    const res = await auth().currentUser?.updatePhoneNumber(phoneNumber as any);
    return res;
  } catch (error) {
    console.log('Update Phone Number Error: ', (error as Error).message);
    return error;
  }
};

export const updateEmail = async (email: string) => {
  try {
    const res = await auth().currentUser?.updateEmail(email);
    return res;
  } catch (error) {
    console.log('Update Email Error: ', (error as Error).message);
    return error;
  }
};

export const updatePassword = async (password: string) => {
  try {
    const res = await auth().currentUser?.updatePassword(password);
    return res;
  } catch (error) {
    console.log('Update Password Error: ', (error as Error).message);
    return error;
  }
};
