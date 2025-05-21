import participants from "../data/participants2025.json";

export const getParticipant = (country: string) => {
  return participants.participants.find(
    (participant: Participant) => participant.country === country
  );
};
