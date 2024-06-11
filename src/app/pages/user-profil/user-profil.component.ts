import { Component } from '@angular/core';
import { ProfileComponent } from '../../components/profile/profile.component';

@Component({
  selector: 'app-user-profil',
  standalone: true,
  imports: [ProfileComponent],
  templateUrl: './user-profil.component.html',
  styleUrl: './user-profil.component.scss'
})
export class UserProfilComponent {

}
