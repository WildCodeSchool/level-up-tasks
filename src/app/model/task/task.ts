import { Priority } from '../priority/Priority';

export class Task {
  constructor(
    public id: number,
    public description: string,
    public deadline: Date,
    public completed: boolean,
    public priority: Priority = Priority.Bas,
    public completedAt :Date,
  ) {
  }

}
