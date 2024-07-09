import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../../service/User/authentication.service';
import { TokenService } from '../../service/User/token.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent { 
  authService:AuthenticationService = inject(AuthenticationService)
  tokenService:TokenService = inject(TokenService)
  public isMobileView!: boolean;
  public innerWidth: any;
  router:Router = inject(Router);
  id =0;
  ngOnInit():void{
    if(this.tokenService.getUserInfo() != null){
      this.id = this.tokenService.getUserInfo().id;
    }
    this.onResize();
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
    this.router.navigate(['/connexion']);
    

  }
}



