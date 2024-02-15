import {create} from 'zustand';
import { UserTypes } from '../types';


type NewUserStore = {
  newUser: UserTypes;
  setNewUser: (user: UserTypes) => void;
};

const useNewUserStore = create<NewUserStore>(set => ({
  newUser: {
    bio: '',
    createdAt: '',
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    photoUrl: '',
    regionCode: '',
    uid: '',
    updatedAt: '',
    password: '',
  },
  setNewUser: newUser => set({newUser}),
}));

export default useNewUserStore;
