import { CommonModule } from '@angular/common';
import { Component,inject, Input } from '@angular/core';
import { Task } from '../../model/task/task';
import { TaskComponent } from '../task/task.component';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TaskFilterComponent } from '../task-filter/task-filter.component';
import { TaskService } from '../../service/tasks/task.service';
import { Expedition } from '../../model/expedition/expedition';
import { ExpeditionService } from '../../service/expedition/expedition.service';
import { TaskFilterPipe } from "../../pipes/task-filter.pipe";
import { ModalComponent } from '../modal/modal.component';

@Component({
    selector: 'app-task-list',
    standalone: true,
    templateUrl: './task-list.component.html',
    styleUrl: './task-list.component.scss',
    imports: [CommonModule, TaskComponent, AddTaskComponent, TaskFilterComponent, TaskFilterPipe,ModalComponent]
})
export class TaskListComponent {
  @Input()
  expedition !: Expedition;
  isActive = true;
  height : string = '100%';
  private taskService = inject(TaskService);
  title : string = "Expedition name";
  expService = inject(ExpeditionService);
  @Input()
  filterValue:string = "";
  isDeleteModalOpen : boolean = false;
  
  changeState(): void { 
    (this.height === '0') ? this.height = '100%' : this.height = '0';
    this.isActive = !this.isActive;
  }

  onReceiveNewTask(event:Task,id:number) : void {
    this.taskService.addTask(event,id).subscribe((task) => {
      this.expedition.tasks = [...this.expedition.tasks,task];
    });
  }

  onReceiveDeleteTask(expId:number,taskId:number) : void {
    this.taskService.deleteTask(expId,taskId).subscribe(()=>{
      this.expedition.tasks = this.expedition.tasks.filter(t => t.id !== taskId)
    });
}
onReceiveEditTask(updatedTask: Task): void {
  this.taskService.updateTask(updatedTask).subscribe((task) => {
    const index = this.expedition.tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
      this.expedition.tasks[index] = task;
    }
  });
}

deleteExp(id:number):void{
  this.expService.deleteExpedition(id).subscribe(()=>{
    this.expService.refreshRequired.next();
  });
}
toogleDeleteExp():void{
  this.isDeleteModalOpen = !this.isDeleteModalOpen;
}

  
}