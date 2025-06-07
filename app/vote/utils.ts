import participants from "../data/participants2025.json";

export const getParticipantByCountry = (country: string) => {
  return participants.participants.find(
    (participant: Participant) => participant.country === country
  );
};

export const getParticipantById = (id: string) => {
  return participants.participants.find(
    (participant: Participant) => participant.id === id
  );
};
