import { Component, Input } from '@angular/core';
import { Team } from '../../model/team/team';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
  @Input() public team!: Team;

}
