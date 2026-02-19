// src/types/client.ts
export type Client = {
  _id: string;
  name: string;
  last: string;
  email: string;
  phone: string;
  message?: string;
  createdAt?: string;
};
