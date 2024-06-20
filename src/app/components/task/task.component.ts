import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Task } from '../../model/task/task';
import { ModalComponent } from '../modal/modal.component';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../service/task.service';
import { ImportancyLevel } from '../../model/importancy-level/importancy-level';
import { whileStatement } from '@babel/types';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [ModalComponent, CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  isDeleteModalOpen : boolean = false;
  @Input() public task !: Task;
  private taskService = inject(TaskService);

  @Output()
  deleteTaskToParent: EventEmitter<Task> = new EventEmitter();

  toggleTaskComplete(){
    this.taskService.toggleTaskComplete(this.task);
  }

  //@Input() public task : Task = new Task('Placeholder Placeholder Placeholder', new Date(), false,ImportancyLevel.Bas);
  
  importancyLevels = Object.values(ImportancyLevel);
  
  deleteTask() : void{
    this.toggleDeleteTaskModal();
    this.deleteTaskToParent.emit(this.task);
  }

  toggleDeleteTaskModal() : void {
    this.isDeleteModalOpen = !this.isDeleteModalOpen;
  }

}
