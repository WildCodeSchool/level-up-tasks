import { Injectable } from '@angular/core';
import { Team } from '../model/team/team';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  readonly teams: Team[] = [
    new Team(1, 'Sirine BETTAIEB', 'sirinebettaieb30@gmail.com', 'Sirine.jpg','https://github.com/sirinebettaieb','https://www.linkedin.com/in/sirine-bettaieb-bb5562177/'),
    new Team(2, 'Lucie DANIS', 'lucie.lindanis@gmail.com', 'Lucie.jpg','https://github.com/LucieLDa','https://www.linkedin.com/in/lucie-danis-053475306/'),
    new Team(3, 'Fatimata DRAME', 'dramefatim75@gmail.com', 'Fatimata.png','https://github.com/Fatimata-dev','https://www.linkedin.com/in/ousseynou-fatimata75014/'),
    new Team(4, 'Salma MOUBARKI', 'salmamoubarki@gmail.com', 'salma.jpg','https://github.com/MoubarkiS','https://www.linkedin.com/in/salma-moubarki-867087130/'),
  ];
}
