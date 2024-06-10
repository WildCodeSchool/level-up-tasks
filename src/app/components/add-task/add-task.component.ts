import { Component, EventEmitter, Output } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { FormsModule } from '@angular/forms';
import { Task } from '../../model/task/task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [ModalComponent, FormsModule, CommonModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  taskModalOpen : boolean = false;
  description : string = "";
  taskDate : Date = new Date();

  @Output()
  addNewTaskToParent: EventEmitter<Task> = new EventEmitter();

  onSubmit() : void {
    console.log("Description:" + this.description);
    console.log("Date:" + this.taskDate);
    this.addNewTaskToParent.emit(new Task(
      1, 
      this.description, 
      new Date(this.taskDate.getFullYear(),this.taskDate.getMonth(),this.taskDate.getDay()), 
      false
    ));
    this.description = "";
    this.taskDate = new Date();
    this.closeAddTaskModal();
  }

  closeAddTaskModal() : void {
    console.log("close add task");
    this.taskModalOpen = false;
  }

  test(id: string) : void {
    console.log("test");
    this.taskModalOpen = true;
  }
}
