import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, inject, Input } from '@angular/core';
import { Task } from '../../model/task/task';
import { TaskComponent } from '../task/task.component';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TaskFilterComponent } from '../task-filter/task-filter.component';
import { TaskService } from '../../service/task.service';
import { ImportancyLevel } from '../../model/importancy-level/importancy-level';
import { Expedition } from '../../model/expedition/expedition';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskComponent, AddTaskComponent,TaskFilterComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  @Input()
  expedition !: Expedition;
  isActive = true;
  height : string = '100%';
  private taskService = inject(TaskService);
  title : string = "Expedition name";
  //taskList : Task[] = this.taskService.getTasks(this.expedition);
  taskList : Task[] = [];
  filteredTasks : Task[] = [];

  ngOnInit():void{
    this.taskList = this.taskService.getTasks(this.expedition)
    this.filteredTasks = this.taskList;
    this.title = this.expedition.title;
  }
  changeState(): void { 
    (this.height === '0') ? this.height = '100%' : this.height = '0';
    this.isActive = !this.isActive;
  }

  onReceiveNewTask(event : Task) : void {
    this.taskService.addTask(event);
    this.taskList = this.taskService.getTasks(this.expedition);
  }

  onReceiveDeleteTask(event : Task) : void {
    this.taskService.deleteTask(event);
    this.taskList = this.taskService.getTasks(this.expedition);
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