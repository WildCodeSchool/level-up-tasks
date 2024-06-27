import { Component } from '@angular/core';
import { ProfileComponent } from '../../components/profile/profile.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { UserGroupeComponent } from '../../components/user-groupe/user-groupe.component';
@Component({
  selector: 'app-user-profil',
  standalone: true,
  imports: [
    ProfileComponent,
    SidebarComponent,
    UserGroupeComponent
  ],
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.scss']
})
export class UserProfilComponent{}

