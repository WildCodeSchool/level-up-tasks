import { Member } from "../membres/membre";


export class Group {
  id?: number;
  name: string;
  members: Member[];

  constructor(name: string, members: Member[], id?: number) {
    this.id = id;
    this.name = name;
    this.members = members;
  }
}