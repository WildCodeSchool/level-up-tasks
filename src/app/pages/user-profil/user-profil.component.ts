import { Component } from '@angular/core';
import { ProfilComponent } from '../../components/profil/profil.component';

@Component({
  selector: 'app-user-profil',
  standalone: true,
  imports: [ProfilComponent],
  templateUrl: './user-profil.component.html',
  styleUrl: './user-profil.component.scss'
})
export class UserProfilComponent {

}
