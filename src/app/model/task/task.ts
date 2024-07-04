import { Priority } from '../priority/Priority';

export class Task {
  constructor(
    public id: number,
    public description: string,
    public deadline: Date,
    private completed: boolean,
    public priority: Priority = Priority.Bas,
    public completedAt :Date,
  ) {
  }

  public isCompleted() {
    return this.completed;
  }

  public changeCompleted() {
    this.completed = !this.completed;
  }
}
