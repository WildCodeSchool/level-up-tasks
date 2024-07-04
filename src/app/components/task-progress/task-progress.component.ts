import { Component, inject } from '@angular/core';
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
}
