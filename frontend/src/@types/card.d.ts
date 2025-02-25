export interface NewCardCredentials {
  question: string;
  answer: string;
  questionImg: string | FileList | null | undefined; // todo: LS/ ajuster typage et validator - voir console.log(newCard); dans l'action
  answerImg: string | FileList | null | undefined;
}

export interface CardMock {
  id: number;
  question: string;
  answer: string;
  questionImg: string | FileList | null | undefined;
  answerImg: string | FileList | null | undefined;
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
