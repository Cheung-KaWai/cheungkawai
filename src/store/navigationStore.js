import { create } from "zustand";

export const useNavigationStore = create((set)=>({
  home: true,
  about: false,
  update: (name, value) => set({ [name]: value })
}))