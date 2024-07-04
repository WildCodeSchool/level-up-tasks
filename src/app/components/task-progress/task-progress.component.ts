import { Component, Input, inject } from '@angular/core';
import { TaskService } from '../../service/tasks/task.service';
import { Task } from '../../model/task/task';
import { Expedition } from '../../model/expedition/expedition';
import { ExpeditionService } from '../../service/expedition/expedition.service';

@Component({
  selector: 'app-task-progress',
  standalone: true,
  imports: [],
  templateUrl: './task-progress.component.html',
  styleUrl: './task-progress.component.scss'
})
export class TaskProgressComponent {
  private expeditionService = inject(ExpeditionService);
  taskTotal : number = 0;
  taskAssigned : number = 0;
  taskCompleted : number = 0;

  ngOnInit(){
    this.expeditionService.getExpeditions().subscribe(
      (exp) => {
       exp.forEach((e) => {
          this.taskTotal += e.tasks.length;
          this.taskCompleted += e.tasks.filter(t => t.isCompleted()).length;

       });
      }
    );
  }

  changeTaskCount(tasks : Task[]) : void{
    this.taskTotal = tasks.length;
    this.taskCompleted = tasks.filter(t => t.isCompleted()).length;
    this.taskAssigned = this.taskTotal - this.taskCompleted;
  }
}
