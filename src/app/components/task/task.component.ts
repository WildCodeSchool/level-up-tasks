import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../model/task/task';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input() public task : Task = new Task('Placeholder Placeholder Placeholder', new Date(), false);

  @Output()
  deleteTaskToParent: EventEmitter<Task> = new EventEmitter();

  deleteTask() : void{
    this.deleteTaskToParent.emit(this.task);
  }
}
