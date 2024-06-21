import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { FormsModule } from '@angular/forms';
import { Task } from '../../model/task/task';
import { CommonModule } from '@angular/common';
import { ImportancyLevel } from '../../model/importancy-level/importancy-level';

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
  selectedImportanceLevel = ImportancyLevel.Bas; 

  @Output()
  addNewTaskToParent: EventEmitter<Task> = new EventEmitter();

  importancyLevels = Object.values(ImportancyLevel);
  
  @Input() expeditionId : number = 0;
  
  
  onSubmit() : void {
    this.addNewTaskToParent.emit(new Task(
      this.description, 
      new Date(this.taskDate), 
      false,
      this.selectedImportanceLevel,
      this.expeditionId
    ));
    this.description = "";
    this.taskDate = new Date();
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
