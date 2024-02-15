import {create} from 'zustand';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';

type UserStore = {
  user: FirebaseAuthTypes.User | null;
  setUser: (user: FirebaseAuthTypes.User | null) => void;
  loggedIn: boolean;
  setLoggedIn: (loggedIn: boolean) => void;
};

const useUserStore = create<UserStore>(set => ({
  user: null,
  setUser: user => set({user}),
  loggedIn: false,
  setLoggedIn: loggedIn => set({loggedIn}),
}));

export default useUserStore;
