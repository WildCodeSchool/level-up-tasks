import { Component } from '@angular/core';
import { ProfileComponent } from '../../components/profile/profile.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-user-profil',
  standalone: true,
  imports: [ProfileComponent,SidebarComponent],
  templateUrl: './user-profil.component.html',
  styleUrl: './user-profil.component.scss'
})
export class UserProfilComponent {

}
