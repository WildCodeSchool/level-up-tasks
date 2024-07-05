import { Component, inject, Input, SimpleChanges } from '@angular/core';
import { ExpeditionService } from '../../service/expedition/expedition.service';
import { Expedition } from '../../model/expedition/expedition';

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

  @Input()
  expeditions: Expedition[] = [];

  ngOnChanges(changes: SimpleChanges){
    console.log(this.expeditions)
    if(this.expeditions.length > 0){
      this.expeditions.map((exp)=>{
        this.taskTotal += exp.tasks.length;
        this.taskAssigned += exp.tasks.filter(task => !task.completed).length;
        this.taskCompleted += exp.tasks.filter(task => task.completed).length;
      });
    }
  }
}
