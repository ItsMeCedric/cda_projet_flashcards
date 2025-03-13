export interface Deck {
  id: number;
  name: string;
  subject: string | null;
  themes: string[];
  downloads: number;
  mark: number;
  playCount: number;
  storeId: number | null;
  url: string;
}
