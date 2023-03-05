import { create } from "zustand";

export const useAboutStore = create((set) => ({
  offset: 0,
  expandItem: 0,
  update: (name, value) => set({ [name]: value }),
}));
