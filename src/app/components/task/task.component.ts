import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Task } from '../../model/task/task';
import { ModalComponent } from '../modal/modal.component';
import { CommonModule } from '@angular/common';
import { ImportancyLevel } from '../../model/importancy-level/importancy-level';
import { TaskService } from '../../service/task.service';
import { FormsModule } from '@angular/forms';

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
  importancyLevels = Object.values(ImportancyLevel);
  private taskService = inject(TaskService);
  description : string = "";
  taskDate : Date = new Date();
  selectedImportanceLevel = ImportancyLevel.Bas;

  @Input() public task !: Task;
  
  @Output()
  deleteTaskToParent: EventEmitter<Task> = new EventEmitter();

  toggleTaskComplete(){
    this.task.completed = !this.task.completed;
    this.taskService.updateTask(this.task);
  }
  
  deleteTask() : void{
    this.toggleDeleteTaskModal();
    this.deleteTaskToParent.emit(this.task);
  }

  toggleDeleteTaskModal() : void {
    this.isDeleteModalOpen = !this.isDeleteModalOpen;
  }
  
  openEditTaskModal(task: Task): void {
    this.task = task;
    this.isEditTaskModalOpen = true;
  }
  closeEditTaskModal(): void {
    this.isEditTaskModalOpen = false;
  }
  onSubmit(): void {
    this.taskService.updateTask(this.task);
  }

}