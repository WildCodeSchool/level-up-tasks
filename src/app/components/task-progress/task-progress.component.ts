import { Component, inject, Input, SimpleChanges } from '@angular/core';
import { Expedition } from '../../model/expedition/expedition';
import { Subscription } from 'rxjs';
import { TaskService } from '../../service/tasks/task.service';
import { ExpeditionService } from '../../service/expedition/expedition.service';

@Component({
  selector: 'app-task-progress',
  standalone: true,
  imports: [],
  templateUrl: './task-progress.component.html',
  styleUrl: './task-progress.component.scss'
})
export class TaskProgressComponent {
  private expService = inject(ExpeditionService);
  
  taskTotal : number = 0;
  taskAssigned : number = 0;
  taskCompleted : number = 0;

  @Input()
  expeditions: Expedition[] = [];
  private subscriptions: Subscription[] = [];

  ngOnChanges(changes: SimpleChanges) {
      this.expService.updateTaskCounters(this.expeditions);
    
  }

  ngOnInit() {
    this.subscriptions.push(
      this.expService.taskTotal$.subscribe(total => this.taskTotal = total),
      this.expService.taskAssigned$.subscribe(assigned => this.taskAssigned = assigned),
      this.expService.taskCompleted$.subscribe(completed => this.taskCompleted = completed)
    );
  }

 
}
