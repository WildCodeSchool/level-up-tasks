
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';
import { LoginComponent } from '../login/login.component';
import { AuthenticationService } from '../../service/User/authentication.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,

  imports: [RouterLink, SignupComponent, LoginComponent,CommonModule],

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})

export class HomeComponent {
  authService = inject(AuthenticationService);

}



