import { CommonModule } from '@angular/common';
import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { Task } from '../../model/task/task';
import { TaskComponent } from '../task/task.component';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TaskFilterComponent } from '../task-filter/task-filter.component';
import { ImportancyLevel } from '../../model/importancy-level/importancy-level';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskComponent, AddTaskComponent,TaskFilterComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  
  isActive = true;
  height : string = '100%';

  //mock data for task list, will be empty once backend is implemented
  taskList : Task[] = [
    new Task('Faire 30 minutes de yoga', new Date("2024-05-16"), true,ImportancyLevel.Haute),
    new Task('Réunion', new Date("2024-06-08"), false,ImportancyLevel.Moyenne)
  ];
  filteredTasks : Task[] = [];
  ngOnInit():void{
     this.filteredTasks = this.taskList;
  }
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

  //filter tasks based on the description
  filterByDescription(filtervalue:string) {
    if(filtervalue) {
      this.filteredTasks = this.taskList.filter((task) => 
        { return task.description.toLowerCase().includes(filtervalue.toLowerCase());
      });
  }else{
    this.filteredTasks = this.taskList;
  }
}

//filter tasks based on the date
filterByDate(date:string){
  if(date){
    this.filteredTasks = this.taskList.filter((task) => {
        return task.date.getTime() === new Date(date).getTime();
    });
  }else{
    this.filteredTasks = this.taskList;
  }
}


}