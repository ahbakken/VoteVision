interface Participant {
  id: string;
  name: string;
  country: string;
  song: string;
}

interface Rating {
  id: string;
  participantId: string;
  rating: number;
}
