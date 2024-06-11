import { Component } from '@angular/core';
import { Profil } from '../../model/user/profil';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.scss'
})
export class ProfilComponent {
  img: string = '../../../assets/pictures/Graphic.png';

  user: Profil = new Profil(1, 'Timfa', 'Emard', '', '', 'user', 'team', this.img, 1, 0);


}
