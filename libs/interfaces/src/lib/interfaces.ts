export type Uuid = string;
export type ISODateString = string;

export interface User {
  id: Uuid;
  name: string;
  email: string;
  role: string;
  department: string;
  clearance: number;
  status: boolean;
  createdAt: ISODateString;
  updatedAt: ISODateString;
}

export interface Document {
  id: Uuid;
  title: string;
  contentUrl: string;
  fileHash: string;
  securityLevel: number;
  department: string | null;
  classification: boolean;
  authorId: Uuid;
  createdAt: ISODateString;
  updatedAt: ISODateString;
  deletedAt: ISODateString | null;
}
