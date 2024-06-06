export class Task {
  constructor(
    readonly id: number,
    readonly description: string,
    readonly date: Date,
    readonly completed: boolean
  ) {}
}
