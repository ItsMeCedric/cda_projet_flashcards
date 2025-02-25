export interface NewCardCredentials {
  question: string;
  answer: string;
  questionImg: File | null;
  answerImg: File | null;
}

export interface CardMock {
  id: number;
  question: string;
  answer: string;
  questionImg: File | null;
  answerImg: File | null;
  playedDate: string | null;
  box: number;
}

export interface CardState {
  isLoading: boolean;
  isCreated: boolean;
  allCards: CardMock[];
  deckCards: CardMock[];
  searchedCards: CardMock[];
  selectedCard: CardMock | null;
  success: string | null;
  error: string | null;
}
