import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../model/task/task';
import { ModalComponent } from '../modal/modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [ModalComponent, CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  isDeleteModalOpen : boolean = false;
  @Input() public task : Task = new Task('Placeholder Placeholder Placeholder', new Date(), false);

  @Output()
  deleteTaskToParent: EventEmitter<Task> = new EventEmitter();

  deleteTask() : void{
    this.closeDeleteTaskModal();
    this.deleteTaskToParent.emit(this.task);
  }

  closeDeleteTaskModal() : void {
    this.isDeleteModalOpen = false;
  }

  openDeleteTaskModal() : void {
    this.isDeleteModalOpen = true;
  }
}
