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
