import { Component, inject } from '@angular/core';
import { TaskListComponent } from '../../components/task-list/task-list.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { TaskProgressComponent } from '../../components/task-progress/task-progress.component';
import { AddExpeditionComponent } from '../../components/add-expedition/add-expedition.component';
import { Expedition } from '../../model/expedition/expedition';
import { CommonModule } from '@angular/common';
import { ExpeditionService } from '../../service/expedition.service';
import { TaskFilterComponent } from '../../components/task-filter/task-filter.component';


interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}
@Component({
  selector: 'app-task-page',
  standalone: true,
  imports: [TaskListComponent, SidebarComponent, TaskProgressComponent, AddExpeditionComponent, CommonModule, TaskFilterComponent],
  templateUrl: './task-page.component.html',
  styleUrl: './task-page.component.scss'
})
export class TaskPageComponent {
  private expeditionService = inject(ExpeditionService);
  expeditionList : Expedition[] = [];
  filterValue : string = "";

  ngOnInit(){
    this.getAll();
    this.expeditionService.refreshRequired.subscribe(response => {
      this.getAll();
    });
  }

  getAll() {
    this.expeditionService.getExpeditions().subscribe(
      (data) => this.expeditionList = data
    );
  }

  onReceiveNewExpedition(event : Expedition){
    this.expeditionService.addExpedition(event);
  }
  
  //filter tasks based on the description
  filterByDescription(filtervalue:string) {
    this.filterValue = filtervalue;
  }

  //filter tasks based on the date
  filterByDate(date:string){
    this.filterValue = date;
  }

  //filter tasks based on the importance off level
  filterByImportance(importance:string){
    this.filterValue = importance;
  }
}
