import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, inject, Input, SimpleChanges } from '@angular/core';
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
  taskList : Task[] = [];
  filteredTasks : Task[] = [];
  @Input()
  filterValue : string = "";

  ngOnInit():void{
    this.refreshList();
    this.filtertasks(this.filterValue);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['filterValue']) {
      this.filtertasks(this.filterValue);
    }
  }

  refreshList() : void {
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
    this.refreshList();
  }

  onReceiveDeleteTask(event : Task) : void {
    this.taskService.deleteTask(event);
    this.refreshList();
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