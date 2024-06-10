import { Component } from '@angular/core';
import { Team } from '../../model/team/team';
import { TeamsService } from '../../service/teams.service';
import { TeamComponent } from '../../components/team/team.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [RouterLink,TeamComponent],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss'
})
export class TeamsComponent {
  public teams: Team[] = [];

  constructor(private teamsService: TeamsService) {}

  ngOnInit() {
    this.teams = this.teamsService.teams;
  }

}
