import { Injectable,} from '@angular/core';
import {  Observable,} from 'rxjs';
import { Group } from '../../model/groupes/groupe';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private baseUrl = 'http://localhost:8080/groupes'; 

  constructor(private http: HttpClient) { }



  getGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(`${this.baseUrl}`);
  }
  createGroup(group: Group): Observable<Group> {
    return this.http.post<Group>(`${this.baseUrl}`, group);
  }

  deleteGroup(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getGroupById(id: number): Observable<Group> {
    return this.http.get<Group>(`${this.baseUrl}/${id}`);
  }
  
  updateUserToGroupe(id: number ,listEmail:String[] ){
    return this.http.put(`${this.baseUrl}/${id}/addUser`,listEmail);
  }
 
 
}

    

