import { Component, inject } from '@angular/core';
import { Task } from '../../model/task/task';
import { TaskService } from '../../service/task.service';

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
    this.taskService.getAllTasks().subscribe(
      (data) => {
        this.changeTaskCount(data);
      }
    );
  }

  changeTaskCount(tasks : Task[]) : void{
    this.taskTotal = tasks.length;
    this.taskCompleted = tasks.filter(t => t.completed).length;
    this.taskAssigned = this.taskTotal - this.taskCompleted;
  }
}
