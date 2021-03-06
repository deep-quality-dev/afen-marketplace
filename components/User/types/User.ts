export interface User {
  _id: string;
  name: string;
  email: string;
  wallet: string;
  twitter?: string;
  instragram?: string;
  avatar?: string;
  banner?: string;
  portfolio?: string;
  description?: string;
  balance: number;
  createdAt: string;
  updatedAt: string;
}
