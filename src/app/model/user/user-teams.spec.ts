import { TeamsRoles } from './teams-roles';
import { UserTeams } from './user-teams';

describe('UserTeams', () => {
  it('should create an instance', () => {
    expect(new UserTeams(1, 'team1', TeamsRoles.Admin)).toBeTruthy();
  });
});
