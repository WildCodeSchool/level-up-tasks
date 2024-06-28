import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../service/User/user.service';
import { User } from '../../model/user/user';
import { AuthenticationService } from '../../service/User/authentication.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent { 
  authService:AuthenticationService = inject(AuthenticationService)
  public isMobileView!: boolean;
  public innerWidth: any;
  router:Router = inject(Router);
  user?:User
  id=0;
  isLogged =false;
  ngOnInit():void{
    this.onResize();
    this.user = this.authService.getUser()
    this.user ? this.isLogged : !this.isLogged
  }
  
  
  @HostListener('window:resize', ['$event'])
  onResize() : void{
    if(typeof window !== 'undefined'){
      this.innerWidth = window.innerWidth;
      if(this.innerWidth < 768){
        this.isMobileView = true;
      }else{
        this.isMobileView = false;
      }
    }
    
  }
  
  isOpen = false;
  
  toggleNavbar() {
    this.isOpen = !this.isOpen;
  }
  logOut(){
    this.authService.logout();
    this.isLogged= false;
    this.router.navigate(['/connexion']);
    

  }
}



