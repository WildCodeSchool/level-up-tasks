export interface Member {
  name: string;
  avatarUrl: string;
}

export interface Group {
  id?: number;
  name: string;
  members: Member[];
}