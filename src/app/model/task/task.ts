export class Task {
  //Auto increment for id, needs to change when implementing backend
  static _id : number = 0;
  readonly id : number;

  constructor(
    readonly description: string,
    readonly date: Date,
    readonly completed: boolean
  ) {
    Task._id++;
    this.id = Task._id;
  }
}
