import { Component, HostListener } from '@angular/core';

import { Router, RouterLink } from '@angular/router';
import { InscriptionComponent } from '../inscription/inscription.component';


@Component({
  selector: 'app-home',
  standalone: true,

  imports: [RouterLink,InscriptionComponent],

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})

export class HomeComponent {
  

}


