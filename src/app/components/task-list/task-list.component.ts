import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, inject, Input } from '@angular/core';
import { Task } from '../../model/task/task';
import { TaskComponent } from '../task/task.component';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TaskFilterComponent } from '../task-filter/task-filter.component';
import { TaskService } from '../../service/task.service';
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
  private taskService = inject(TaskService);
  taskList : Task[] = this.taskService.getTasks();
  filteredTasks : Task[] = [];
  levelImportany:ImportancyLevel[]= new Array<ImportancyLevel>();
  ngOnInit():void{
     this.filteredTasks = this.taskList;
     this.levelImportany = this.taskList.map((task) => task.importancyLevel);
  }
  changeState(): void { 
    (this.height === '0') ? this.height = '100%' : this.height = '0';
    this.isActive = !this.isActive;
  }

  onReceiveNewTask(event : Task) : void {
    this.taskService.addTask(event);
  }

  onReceiveDeleteTask(event : Task) : void {
    this.taskService.deleteTask(event);
  }

  //filter tasks based on the description
  filterByDescription(filtervalue:string) {
     this.filtertasks(filtervalue)
}

//filter tasks based on the date
filterByDate(date:string){
    this.filtertasks(date)
}



//filter tasks based on the importance off level
filterByImportance(importance:string){
  this.filtertasks(importance);
}


//global function to filter tasks for refactor the code
  filtertasks(filterValue:string){
    if(filterValue ) {
    this.filteredTasks = this.taskList.filter((task) => {
      return task.description.toLowerCase().includes(filterValue.toLowerCase()) ||
      task.date.getTime() === new Date(filterValue).getTime() ||
      task.importancyLevel === filterValue;
    });
  }else{
    this.filteredTasks = this.taskList;

  }
  }
}