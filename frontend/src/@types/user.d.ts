export interface UserMock {
  id: number;
  username: string;
  email: string;
  b64Url: string;
  verified: boolean;
  hash: string;
}

export interface User {
  id: number;
  role: "user" | "admin";
  username: string;
  email: string;
  profilePicture: string;
  verified: boolean;
}
