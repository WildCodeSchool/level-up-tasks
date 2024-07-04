import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Task } from '../../model/task/task';
import { ModalComponent } from '../modal/modal.component';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../service/tasks/task.service';
import { FormsModule } from '@angular/forms';
import { Priority } from '../../model/priority/Priority';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [ModalComponent, CommonModule, FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  isDeleteModalOpen : boolean = false;
  isEditTaskModalOpen : boolean = false;
  private taskService = inject(TaskService);
  priorities = Object.values(Priority);

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
  
  toggleTaskModal(task: Task): void {
    this.task = task;
    this.isEditTaskModalOpen = !this.isEditTaskModalOpen;
  }

  onSubmit(): void {
    this.isEditTaskModalOpen = !this.isEditTaskModalOpen;
  }

}