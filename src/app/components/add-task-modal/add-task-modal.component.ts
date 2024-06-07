import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../model/task/task';

@Component({
  selector: 'app-add-task-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task-modal.component.html',
  styleUrl: './add-task-modal.component.scss'
})
export class AddTaskModalComponent {
  @Output() closeEvent = new EventEmitter();
  @Output() submitEvent : EventEmitter<Task> = new EventEmitter();

  constructor(private elementRef: ElementRef) {}

  close(): void {
    this.elementRef.nativeElement.remove();
    this.closeEvent.emit();
  }

  onSubmit() : void {
    console.log("Description:" + this.description);
    console.log("Date:" + this.taskDate);
    this.elementRef.nativeElement.remove();
    this.submitEvent.emit(new Task(1,this.description, this.taskDate,false));
  }

  description : string = "";
  taskDate : Date = new Date();
}
