export interface Deck {
  id: number;
  name: string;
  subject: string | null;
  themes: string[];
  downloads: number;
  mark: number;
  playCount: number;
  userId: number;
  storeId: number | null;
  url: string;
}

export interface Theme {
  id: number;
  label: string;
}
