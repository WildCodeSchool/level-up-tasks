import { Component } from '@angular/core';
import { User } from '../../model/user/user';
import { ModalComponent } from '../modal/modal.component';
import { UserTeams } from '../../model/user/user-teams';
import { TeamsRoles } from '../../model/user/teams-roles';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  modalIsOppen: boolean = false;
  teams: UserTeams[] = [{id: 1, name: 'teams1',role:TeamsRoles.Admin}, {id: 2, name: 'teams2',role:TeamsRoles.Member}, {id: 3, name: 'teams3',role:TeamsRoles.Member}];
  img: string = '../../../assets/pictures/Graphic.png';

  user: User = new User(1, 'Timfa', 'Emard', '', '', this.teams, this.img, 1, 0);

  editUser(){
    this.modalIsOppen = true;

  }
}
