import { User } from "../user/user";

export interface userHasGroups
{ id:number,
  user:User;}

export class Group {
 
  constructor(
    public idgroup: number,
    public  name: string,
    public userHasGroups : userHasGroups[]
   
){}
}