export type Pact = {
  title: string;
  description: string;
  streak: number;
  periodLength: number;
  periodTarget: number;
  privacyLevel: string;
  pactId: string;
  participants: string[];
  tags: string[];
  status: string;
};

export type User = {
  username: string;
  firstName: string;
  lastName: string;
  location: string;
  email: string;
  userId: string;
};

export type FriendSuggestion = {
  user: User;
  mutual: number;
  common: string;
};
