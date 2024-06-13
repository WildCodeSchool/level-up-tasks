export class Task {
  constructor(
    readonly id: number,
    readonly description: string,
    readonly date: Date,
    private completed: boolean
  ) {}

  public isCompleted(){
    return this.completed;
  }

  public changeCompleted(){
    this.completed = !this.completed;
  }
}
