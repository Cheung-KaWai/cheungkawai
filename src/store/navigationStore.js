import { create } from "zustand";

export const useNavigationStore = create((set)=>({
  home: true,
  about: false,
  projects: false,
  lab: false,
  blog: false,
  update: (name, value) => set({ [name]: value })
}))