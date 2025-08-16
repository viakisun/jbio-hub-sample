import { create } from 'zustand';

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

const useClusterFiltersStore = create<ClusterFiltersState>((set) => ({
  region: null,
  field: null,
  orgType: null,
  keyword: '',
  setRegion: (region) => set({ region }),
  setField: (field) => set({ field }),
  setOrgType: (orgType) => set({ orgType }),
  setKeyword: (keyword) => set({ keyword }),
  resetFilters: () => set({
    region: null,
    field: null,
    orgType: null,
    keyword: '',
  }),
}));

export default useClusterFiltersStore;
