import { Member } from "../membres/membre";


export interface Group {
  id?: number;
  name: string;
  members: Member[];
}