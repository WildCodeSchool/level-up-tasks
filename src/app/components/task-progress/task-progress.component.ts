import { Component, Input, inject } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { Task } from '../../model/task/task';

@Component({
  selector: 'app-task-progress',
  standalone: true,
  imports: [],
  templateUrl: './task-progress.component.html',
  styleUrl: './task-progress.component.scss'
})
export class TaskProgressComponent {
  private taskService = inject(TaskService);
  taskTotal : number = 0;
  taskAssigned : number = 0;
  taskCompleted : number = 0;

  ngOnInit(){
    this.taskTotal = this.taskService.getTasks().length;
    this.taskCompleted = this.taskService.getTasks().filter(t => t.isCompleted()).length;
    this.taskAssigned = this.taskTotal - this.taskCompleted;
    this.taskService.taskUpdated.subscribe(
      (tasks) => {
        this.taskTotal = tasks.length;
        this.taskCompleted = this.taskService.getTasks().filter(t => t.isCompleted()).length;
        this.taskAssigned = this.taskTotal - this.taskCompleted;
      }
    );
  }
}
