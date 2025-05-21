interface Participant {
  id: string;
  name: string;
  country: string;
  song: string;
}

interface Rating {
  id: string;
  participantId: string;
  rating: RatingCategories;
}

interface RatingCategories {
  song: number;
  presentation: number;
  stageshow: number;
  outfit: number;
  glitter: number;
}
