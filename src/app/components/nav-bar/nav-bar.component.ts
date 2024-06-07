import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent { 
  
  public isMobileView!: boolean;
  public innerWidth: any;
  ngOnInit(){
    this.onResize();
  }
  
  
 @HostListener('window:resize', ['$event'])
onResize() {
  this.innerWidth = window.innerWidth;
  if(this.innerWidth < 768){
    this.isMobileView = true;
  }else{
    this.isMobileView = false;
  }
}
    isOpen = false;
 

  toggleNavbar() {
    this.isOpen = !this.isOpen;
  }
}



