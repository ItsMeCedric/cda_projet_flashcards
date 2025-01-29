// todo : verif types si ok
// todo : distinguer le type User en base de données du type User utilisé dans le front

export interface UserMock {
  id: number;
  username: string;
  first_name: string | null;
  last_name: string | null;
  email: string;
  b64Url: string;
  verified: boolean;
  hash: string;
}

export interface User {
  id: number;
  username: string;
  first_name: string | null;
  last_name: string | null;
  email: string;
  b64Url: string;
  // verified: boolean;
  // hash: string;
}
