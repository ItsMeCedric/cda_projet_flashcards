type Deck = {
  id: number;
  name: string;
  subject: string | null;
  downloads: number;
  mark: number;
  url: string;
};

export interface NewDeckCredentials {
  name: string;
  subject: string;
}

export interface DeckMock {
  id: number;
  name: string;
  url: string;
  subject: string | null;
  downloads: number;
  mark: number;
}

export interface DeckState {
  isLoading: boolean;
  isCreated: boolean;
  allDecks: Deck[];
  userDecks: Deck[];
  searchedDecks: Deck[];
  selectedDeck: Deck | null;
  success: string | null;
  error: string | null;
}
