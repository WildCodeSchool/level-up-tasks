import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Task } from '../../model/task/task';
import { TaskComponent } from '../task/task.component';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskComponent, AddTaskComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  isActive = true;
  height : string = '100%';

  //mock data for task list, will be empty once backend is implemented
  taskList : Task[] = [
    new Task('Faire 30 minutes de yoga', new Date("2024-05-16"), false),
    new Task('Réunion', new Date("2024-06-08"), false)
  ];

  changeState(): void { 
    (this.height === '0') ? this.height = '100%' : this.height = '0';
    this.isActive = !this.isActive;
  }

  onReceiveNewTask(event : Task) : void {
    this.taskList.push(event);
  }

  onReceiveDeleteTask(event : Task) : void {
    this.taskList.filter( (task, index) => {
      if(task.id === event.id) this.taskList.splice(index, 1);
    });
  }
}
