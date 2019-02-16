export interface Raffle {
  name: string;
  drawn: boolean;
  participants: Participant[];
  winners: string[];
}

export interface Participant {
  name: string;
}
