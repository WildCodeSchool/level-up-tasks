import { Component } from '@angular/core';
import { TaskListComponent } from '../../components/task-list/task-list.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { HomeComponent } from '../home/home.component';
interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}
@Component({
  selector: 'app-task-page',
  standalone: true,
  imports: [TaskListComponent,SidebarComponent],
  templateUrl: './task-page.component.html',
  styleUrl: './task-page.component.scss'
})
export class TaskPageComponent {
 
}
