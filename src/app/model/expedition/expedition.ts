import { Task } from "../task/task";

export class Expedition {
    id!: number;
    tasks: Task[] = [];
  
    constructor(
      readonly name: string,
    ) {

    }
}