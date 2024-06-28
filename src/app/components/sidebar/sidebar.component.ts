import { Component, EventEmitter, HostListener, inject, OnInit, Output, output } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { sidebarData } from './side-data';
import { User } from '../../model/user/user';
import { AuthenticationService } from '../../service/User/authentication.service';

interface SideNavToggle{
  screenWidth:number;
  Iscollapsed:boolean;
}
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit{
  
  @Output() onToggleSidenav : EventEmitter<SideNavToggle> = new EventEmitter();
  Iscollapsed = false;
  screenWidth = 0 ;
  navData=sidebarData;
  user?:User;
  authService:AuthenticationService = inject(AuthenticationService);
  @HostListener('window:resize',['$event'])
  onResize(event:any):void{
    if(typeof window !== 'undefined'){
      this.screenWidth = window.innerWidth;
    }
  }

  ngOnInit(): void {
    this.user = this.authService.getUser();
    if(typeof window !== 'undefined'){
      this.screenWidth = window.innerWidth;
      if(this.screenWidth < 768){
        this.Iscollapsed = false;
        this.onToggleSidenav.emit({screenWidth:this.screenWidth,Iscollapsed:this.Iscollapsed});
      }
    }
      
  }
  toggleCollapse(): void {
    this.Iscollapsed = !this.Iscollapsed;
    this.onToggleSidenav.emit({screenWidth:this.screenWidth,Iscollapsed:this.Iscollapsed});
  }
  closeSidenav(): void {
    this.Iscollapsed = false;
    this.onToggleSidenav.emit({screenWidth:this.screenWidth,Iscollapsed:this.Iscollapsed});

  }
  

}
