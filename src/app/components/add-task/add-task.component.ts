import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { FormsModule } from '@angular/forms';
import { Task } from '../../model/task/task';
import { CommonModule } from '@angular/common';
import { Priority } from '../../model/priority/Priority';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [ModalComponent, FormsModule, CommonModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  isTaskModalOpen : boolean = false;
  description : string = "";
  taskDate : Date = new Date();
  selectedImportanceLevel = Priority.Bas;

  @Output()
  addNewTaskToParent: EventEmitter<Task> = new EventEmitter();

  Priority = Object.values(Priority);
  
  @Input() expeditionId : number = 0;
  
  
  onSubmit() : void {
    this.addNewTaskToParent.emit(new Task(
      0,
      this.description, 
      this.taskDate,
      false,
      this.selectedImportanceLevel,
      new Date(),
    ));
    this.closeAddTaskModal();
  }

  closeAddTaskModal() : void {
    this.isTaskModalOpen = false;
  }

  openAddTaskModal() : void {
    this.isTaskModalOpen = true;
  }

  //this function is to make the textarea expend when the user types out the task's description
  autogrow(){
    let textArea = document.getElementById("task-name")       
    textArea!.style.height = '0px';
    textArea!.style.height = textArea!.scrollHeight + 'px';
  }
}
