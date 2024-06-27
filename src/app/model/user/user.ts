import { UserTeams } from "./user-teams";


export class User {

    constructor(
        public id: number,
        public firstname: string,
        public lastname: string,
        public email: string,
        public password: string,
        public team: UserTeams[],
        public profileImage: string,
        public level: number,
        public rewardPercentage: number,
    ){}
}
