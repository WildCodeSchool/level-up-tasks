export class Expedition {
    static _id: number = 0;
    readonly id: number;
  
    constructor(
      readonly title: string,
    ) {
      Expedition._id++;
      this.id = Expedition._id;
    }
}