import AsyncStorage from '@react-native-async-storage/async-storage';

export const AsyncStorageSet = async (key: string, value: string) => {
  try {
    const valueType = typeof value;
    if (valueType === 'object') {
      value = JSON.stringify(value);
      await AsyncStorage.setItem(key, value);
    }
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
};
