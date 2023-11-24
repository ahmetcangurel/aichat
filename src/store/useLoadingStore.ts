import {create} from 'zustand';

type LoadingStore = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

const useLoadingStore = create<LoadingStore>(set => ({
  loading: true,
  setLoading: loading => set({loading}),
}));

export default useLoadingStore;
