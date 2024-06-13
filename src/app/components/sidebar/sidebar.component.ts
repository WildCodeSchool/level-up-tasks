import { Component, EventEmitter, HostListener, OnInit, Output, output } from '@angular/core';
import { navbarData } from './nav-data';
import {  RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit{
  
@Output() onToggleSidenav :  EventEmitter<SideNavToggle> =new EventEmitter();
  collapsed = false;
  screenWidth = 0 ;
  navData=navbarData;
  @HostListener('window:resize',['$event'])
  onResize(event:any):void{
    this.screenWidth = window.innerWidth;
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth < 768){
      this.collapsed = false;
      this.onToggleSidenav.emit({screenWidth:this.screenWidth,collapsed:this.collapsed});
    }
    
      
  }
  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSidenav.emit({screenWidth:this.screenWidth,collapsed:this.collapsed});
  }
  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSidenav.emit({screenWidth:this.screenWidth,collapsed:this.collapsed});

  }
  

}
