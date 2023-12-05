import {create} from 'zustand';

type User = {
  bio: string;
  createdAt: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  photoUrl: string;
  regionCode: string;
  uid: string;
  updatedAt: string;
  password: string;
};

type NewUserStore = {
  newUser: User;
  setNewUser: (user: User) => void;
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
