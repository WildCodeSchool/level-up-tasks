import { EventEmitter, Injectable } from '@angular/core';
import { Task } from '../model/task/task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  taskUpdated : EventEmitter<Task[]> = new EventEmitter();

  tasks : Task[] = [
    new Task('Faire 30 minutes de yoga', new Date("2024-05-16"), true),
    new Task('Réunion', new Date("2024-06-08"), false)
  ];

  getTasks() : Task[]{
    return this.tasks;
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
