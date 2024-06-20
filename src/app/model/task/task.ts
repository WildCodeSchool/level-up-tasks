import { ImportancyLevel } from '../../model/importancy-level/importancy-level';

export class Task {
  static _id: number = 0;
  readonly id: number;
  readonly importancyLevel: ImportancyLevel;

  constructor(
    readonly description: string,
    readonly date: Date,
    private completed: boolean,
    importancyLevel: ImportancyLevel = ImportancyLevel.Bas
  ) {
    Task._id++;
    this.id = Task._id;
    this.importancyLevel = importancyLevel;
  }

  public isCompleted() {
    return this.completed;
  }

  public changeCompleted() {
    this.completed = !this.completed;
  }
}
