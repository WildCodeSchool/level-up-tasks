import { ImportancyLevel } from '../../model/importancy-level/importancy-level';

export class Task {
  id !: number;
  readonly priority: ImportancyLevel;
  completed: boolean;

  constructor(
    readonly description: string,
    readonly deadline: Date,
    completed: boolean,
    importancyLevel: ImportancyLevel = ImportancyLevel.Bas,
    readonly expeditionId: number
  ) {
    this.priority = importancyLevel;
    this.completed = completed; 
  }

  public isCompleted() : boolean {
    return this.completed;
  }

  public changeCompleted() {
    this.completed = !this.completed;
  }
}
