import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-progress',
  standalone: true,
  imports: [],
  templateUrl: './task-progress.component.html',
  styleUrl: './task-progress.component.scss'
})
export class TaskProgressComponent {
  @Input()
  taskTotal : number = 0;
  @Input()
  taskAssigned : number = 0;
  @Input()
  taskCompleted : number = 0;
}
