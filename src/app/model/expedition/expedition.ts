import { Task } from "../task/task";
import { User } from "../user/user";

export class Expedition {
  
    constructor(
      public id: number,
      public name: string,
      public user:User,
      public tasks: Task[]
    ) {
    }
}