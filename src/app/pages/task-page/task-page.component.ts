import { Component } from '@angular/core';
import { TaskListComponent } from '../../components/task-list/task-list.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { HomeComponent } from '../home/home.component';
import { RouterEvent } from '@angular/router';
import { TaskProgressComponent } from '../../components/task-progress/task-progress.component';


interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}
@Component({
  selector: 'app-task-page',
  standalone: true,
  imports: [TaskListComponent, SidebarComponent, TaskProgressComponent],
  templateUrl: './task-page.component.html',
  styleUrl: './task-page.component.scss'
})
export class TaskPageComponent {
 
}
