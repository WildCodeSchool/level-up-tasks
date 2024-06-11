import { Component } from '@angular/core';
import { Profil } from '../../model/user/profil';
import { ModalComponent } from '../modal/modal.component';
import { UserTeams } from '../../model/user/user-teams';
import { TeamsRoles } from '../../model/user/teams-roles';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  modalIsOppen: boolean = false;
  teams: UserTeams[] = [{id: 1, name: 'teams1',role:TeamsRoles.Admin}, {id: 2, name: 'teams2',role:TeamsRoles.Member}, {id: 3, name: 'teams3',role:TeamsRoles.Member}];
  img: string = '../../../assets/pictures/Graphic.png';

  user: Profil = new Profil(1, 'Timfa', 'Emard', '', '', this.teams, this.img, 1, 0);

  editUser(){
    this.modalIsOppen = true;

  }
}
