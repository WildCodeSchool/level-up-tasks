
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-home',
  standalone: true,

  imports: [RouterLink, SignupComponent, LoginComponent],

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})

export class HomeComponent {

}



