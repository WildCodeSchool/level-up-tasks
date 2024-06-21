import { EventEmitter, Injectable } from '@angular/core';
import { Task } from '../model/task/task';
import { ImportancyLevel } from '../model/importancy-level/importancy-level';
import { Expedition } from '../model/expedition/expedition';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  taskUpdated : EventEmitter<Task[]> = new EventEmitter();

  tasks : Task[] = [
    new Task('Faire 30 minutes de yoga', new Date("2024-05-16"), true, ImportancyLevel.Bas, 1),
    new Task('Course', new Date("2024-06-08"), false, ImportancyLevel.Moyenne, 1),
    new Task('Réunion', new Date("2024-06-08"), false, ImportancyLevel.Haute, 2)
  ];

  getAllTasks() : Task[]{
    return this.tasks;
  }

  getTasks(expedition : Expedition) : Task[]{
    return this.tasks.filter( (task) => task.expeditionId == expedition.id);
  }

  addTask(task : Task) : void{
    this.tasks.push(task);
    this.taskUpdated.emit(this.tasks);
  }

  deleteTask(task : Task) : void {
    this.tasks.filter( (t, index) => {
      if(task.id === t.id) this.tasks.splice(index, 1);
    });
    this.taskUpdated.emit(this.tasks);
  }

  toggleTaskComplete(task : Task) : void {
    this.tasks.filter( (t, index) => {
      if(task.id === t.id) t.changeCompleted();
    });
    this.taskUpdated.emit(this.tasks);
  }
}
