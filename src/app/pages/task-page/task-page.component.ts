import { Component, inject } from '@angular/core';
import { TaskListComponent } from '../../components/task-list/task-list.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { TaskProgressComponent } from '../../components/task-progress/task-progress.component';
import { AddExpeditionComponent } from '../../components/add-expedition/add-expedition.component';
import { TaskService } from '../../service/task.service';
import { Expedition } from '../../model/expedition/expedition';
import { CommonModule } from '@angular/common';
import { ExpeditionService } from '../../service/expedition.service';


interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}
@Component({
  selector: 'app-task-page',
  standalone: true,
  imports: [TaskListComponent, SidebarComponent, TaskProgressComponent, AddExpeditionComponent, CommonModule],
  templateUrl: './task-page.component.html',
  styleUrl: './task-page.component.scss'
})
export class TaskPageComponent {
  private expeditionService = inject(ExpeditionService);
  expeditionList : Expedition[] = this.expeditionService.getExpeditions();

  onReceiveNewExpedition(event : Expedition){
    this.expeditionService.addExpedition(event);
    
  }
}
