import { TeamsRoles } from "./teams-roles";

export class UserTeams {
    constructor(
        public id: number,
        public name: string,
        public role :TeamsRoles
    ){

    }
}
