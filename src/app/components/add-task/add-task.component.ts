import { Component, EventEmitter, Output } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { ModalService } from '../../service/modal/modal.service';
import { FormsModule } from '@angular/forms';
import { Task } from '../../model/task/task';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [ModalComponent, FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  constructor(protected modalService: ModalService) { }

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
    this.modalService.close();
  }

  description : string = "";
  taskDate : Date = new Date();
}
