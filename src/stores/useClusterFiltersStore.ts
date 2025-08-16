import { create, StateCreator } from 'zustand';

interface ClusterFiltersState {
  region: string | null;
  field: string | null;
  orgType: string | null;
  keyword: string;
  setRegion: (region: string | null) => void;
  setField: (field: string | null) => void;
  setOrgType: (orgType: string | null) => void;
  setKeyword: (keyword: string) => void;
  resetFilters: () => void;
}

const storeCreator: StateCreator<ClusterFiltersState> = (set) => ({
  region: null,
  field: null,
  orgType: null,
  keyword: '',
  setRegion: (region: string | null) => set({ region }),
  setField: (field: string | null) => set({ field }),
  setOrgType: (orgType: string | null) => set({ orgType }),
  setKeyword: (keyword: string) => set({ keyword }),
  resetFilters: () => set({
    region: null,
    field: null,
    orgType: null,
    keyword: '',
  }),
});

const useClusterFiltersStore = create(storeCreator);

export default useClusterFiltersStore;
