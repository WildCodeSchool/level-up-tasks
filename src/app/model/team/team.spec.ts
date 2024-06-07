import { Team } from './team';

describe('Team', () => {
  it('should create an instance', () => {
    expect(new Team(1, 'name', 'email', 'picture', 'iconeGit', 'iconeLink')).toBeTruthy();
  });
});
