import { create } from "zustand";

interface StoreState {
  participant?: Participant;
  rating?: Rating;
  ratings: Rating[];
  setParticipant: (participant: Participant) => void;
}

const useStore = create<StoreState>((set) => ({
  participant: undefined,
  setParticipant: (participant: Participant) => set({ participant }),
  //
  rating: undefined,
  ratings: [],
  setRatings: (ratings: Rating[]) => set({ ratings }),
  setRating: (rating: Rating) => set({ rating }),
}));

export default useStore;
