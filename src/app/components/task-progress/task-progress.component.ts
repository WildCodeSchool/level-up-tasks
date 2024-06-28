import { Component, inject } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { ExpeditionService } from '../../service/expedition.service';

@Component({
  selector: 'app-task-progress',
  standalone: true,
  imports: [],
  templateUrl: './task-progress.component.html',
  styleUrl: './task-progress.component.scss'
})
export class TaskProgressComponent {
  private taskService = inject(TaskService);
  private expeditionService = inject(ExpeditionService);
  taskTotal : number = 0;
  taskAssigned : number = 0;
  taskCompleted : number = 0;

  ngOnInit(){
    this.changeTaskCount();
    this.expeditionService.refreshRequired.subscribe(response => {
      this.changeTaskCount();
    });
    this.taskService.refreshRequired.subscribe(response => {
      this.changeTaskCount();
    });
  }

  changeTaskCount() : void {
    this.taskService.getAllTasks().subscribe(
      (data) => {
        this.taskTotal = data.length;
        this.taskCompleted = data.filter(t => t.completed).length;
        this.taskAssigned = this.taskTotal - this.taskCompleted;
      }
    );
  }
}
