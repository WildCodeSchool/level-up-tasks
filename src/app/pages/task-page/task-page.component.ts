import { Component, SimpleChanges, inject } from '@angular/core';
import { TaskListComponent } from '../../components/task-list/task-list.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { TaskProgressComponent } from '../../components/task-progress/task-progress.component';
import { AddExpeditionComponent } from '../../components/add-expedition/add-expedition.component';
import { Expedition } from '../../model/expedition/expedition';
import { CommonModule } from '@angular/common';
import { TaskFilterComponent } from '../../components/task-filter/task-filter.component';
import { User } from '../../model/user/user';
import { AuthenticationService } from '../../service/User/authentication.service';
import { UserService } from '../../service/User/user.service';
import { AddTaskComponent } from '../../components/add-task/add-task.component';
import { TaskService } from '../../service/tasks/task.service';
import { ExpeditionService } from '../../service/expedition/expedition.service';


interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}
@Component({
  selector: 'app-task-page',
  standalone: true,
  imports: [TaskListComponent, SidebarComponent, TaskProgressComponent, AddExpeditionComponent, CommonModule, TaskFilterComponent,AddTaskComponent],
  templateUrl: './task-page.component.html',
  styleUrl: './task-page.component.scss'
})
export class TaskPageComponent {
  private expeditionService = inject(ExpeditionService);
  private authService = inject(AuthenticationService);
  expeditionList : Expedition[] = [];
  filteredExps : Expedition[] = [];
  user?:User;
  userService = inject(UserService);
  taskService = inject(TaskService);
  filterValue: string = "";
  
  ngOnInit():void{
    this.user = this.authService.getUser();
    this.getUserExpeditions();
  }

  getUserExpeditions(){
    if(!this.user) return;
    this.userService.getUserExpeditions(this.user.id).subscribe((expeditions) => {
      this.expeditionList = expeditions;
      this.filteredExps = this.expeditionList;
    });
  }
  
  onReceiveNewExpedition(event : Expedition){
    this.expeditionService.addExpedition(event, this.user?.id || 0).subscribe((ex) => {
      this.expeditionList.push(ex);
    });
  }
  
  //filter tasks based on the description
  filterByDescription(description:string) {
    this.filterValue = description;
  }

  //filter tasks based on the date
  filterByDate(date: string){
      this.filterValue = date;
  }

  //filter tasks based on the importance off level
  filterByPrioties(importance:string){
    this.filterValue = importance;
  }
 

}
