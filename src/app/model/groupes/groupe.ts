import { User } from "../user/user";


export class Group {
  id?: number;
  name: string;
  members: User[];

  constructor(name: string, members: User[], id?: number) {
    this.id = id;
    this.name = name;
    this.members = members;
  }
}