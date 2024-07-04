import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../model/task/task';
import { ModalComponent } from '../modal/modal.component';
import { CommonModule } from '@angular/common';
import { Priority } from '../../model/priority/Priority';

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

  @Input() public task !: Task;
  
  @Output()
  deleteTaskToParent: EventEmitter<Task> = new EventEmitter();

  toggleTaskComplete(){
    //this.taskService.toggleTaskComplete(this.task);
  }
  
  deleteTask() : void{
    this.toggleDeleteTaskModal();
    this.deleteTaskToParent.emit(this.task);
  }

  toggleDeleteTaskModal() : void {
    this.isDeleteModalOpen = !this.isDeleteModalOpen;
  }
}