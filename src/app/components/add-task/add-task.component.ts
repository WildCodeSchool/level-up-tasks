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
    this.addNewTaskToParent.emit(new Task(
      1, 
      this.description, 
      new Date(this.taskDate), 
      false
    ));
    this.description = "";
    this.taskDate = new Date();
    this.closeAddTaskModal();
  }

  closeAddTaskModal() : void {
    this.taskModalOpen = false;
  }

  openAddTaskModal() : void {
    this.taskModalOpen = true;
  }

  //this function is to make the textarea expend when the user types out the task's description
  autogrow(){
    let textArea = document.getElementById("task-name")       
    //textArea!.style.overflow = 'hidden';
    textArea!.style.height = '0px';
    textArea!.style.height = textArea!.scrollHeight + 'px';
  }
}
