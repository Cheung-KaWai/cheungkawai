import { create } from "zustand";

export const useCursorStore = create((set)=>({
  expand: false,
  update: (name, value) => set({ [name]: value })
}))