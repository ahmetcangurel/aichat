import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Theme = {
  isDarkTheme: boolean;
  toggleTheme: () => void;
};

export const useThemeStore = create<Theme>()(
  persist(
    set => ({
      isDarkTheme: false,
      toggleTheme: () => set(state => ({isDarkTheme: !state.isDarkTheme})),
    }),
    {
      name: 'theme-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
