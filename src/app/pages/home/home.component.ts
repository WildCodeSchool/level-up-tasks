import { Component, HostListener } from '@angular/core';

import { Router, RouterLink } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';


@Component({
  selector: 'app-home',
  standalone: true,

  imports: [RouterLink, SignupComponent],

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})

export class HomeComponent {
  

}


