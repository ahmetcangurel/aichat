import {create} from 'zustand';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';

type UserStore = {
  user: FirebaseAuthTypes.User | {};
  setUser: (user: string) => void;
};

const useUserStore = create<UserStore>(set => ({
  user: {},
  setUser: user => set({user}),
}));

export default useUserStore;
