import { Component, HostListener } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';
import { InscriptionComponent } from '../inscription/inscription.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,NavBarComponent,InscriptionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})

export class HomeComponent {
  

}


