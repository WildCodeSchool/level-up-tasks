import { Component } from '@angular/core';
import { UserComponent } from '../../components/user/usercomponent';

@Component({
  selector: 'app-user-profil',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './user-profil.component.html',
  styleUrl: './user-profil.component.scss'
})
export class UserProfilComponent {

}
