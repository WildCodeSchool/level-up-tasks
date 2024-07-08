import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from '../../model/task/task';
import { ModalComponent } from '../modal/modal.component';
import { CommonModule } from '@angular/common';
import { Priority } from '../../model/priority/Priority';
import { ExpeditionService } from '../../service/expedition/expedition.service';
import { Expedition } from '../../model/expedition/expedition';
import { TaskService } from '../../service/tasks/task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [ModalComponent, CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  isDeleteModalOpen : boolean = false;
  Priority = Object.values(Priority);
  expService = inject(ExpeditionService);
  taskService = inject(TaskService);
  expedition?:Expedition;
  @Input() public task !: Task;
  
  @Output()
  deleteTaskToParent: EventEmitter<Task> = new EventEmitter();
  ngOnInit():void{
    this.taskService.getTaskExpedition(this.task.id).subscribe((expedition)=>{
      this.expedition = expedition;
    });
  }
  completeTask(){
    if(this.expedition === undefined) return;
    this.expService.completeTask(this.task.id,this.expedition.id).subscribe(()=>{
    this.expService.updateTaskCounters([this.expedition as Expedition]);
    });
  }
  
  deleteTask() : void{
    this.toggleDeleteTaskModal();
    this.deleteTaskToParent.emit(this.task);
  }

  toggleDeleteTaskModal() : void {
    this.isDeleteModalOpen = !this.isDeleteModalOpen;
  }
}