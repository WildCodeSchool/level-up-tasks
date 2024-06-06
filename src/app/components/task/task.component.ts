import { Component, Input } from '@angular/core';
import { Task } from '../../model/task/task';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input() public task : Task = new Task(0, 'Placeholder Placeholder Placeholder', new Date(), false);
}
