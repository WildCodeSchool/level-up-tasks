export class Profil {

    constructor(
        public id: number,
        public firstname: string,
        public lastname: string,
        public email: string,
        public password: string,
        public role: string,
        public team: string,
        public image: string,
        public level: number,
        public reward: number,
    ){}
}
