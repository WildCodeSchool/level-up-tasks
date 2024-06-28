import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../../model/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl= 'http://localhost:8080';
  httpClient:HttpClient = inject(HttpClient);
  constructor() { }

 public getAll():Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiUrl}/users`);
  }

  public getById(id:number):Observable<User> {
    return this.httpClient.get<User>(`${this.apiUrl}/users/${id}`);
  }

  


  public save(user:User):Observable<User> {
    return this.httpClient.post<User>(`${this.apiUrl}/users`, user);
  }

  public delete(id:number):Observable<any> {
    return this.httpClient.delete<any>(`${this.apiUrl}/users/${id}`);
  }

  public update(user:User):Observable<User> {
    return this.httpClient.put<User>(`${this.apiUrl}/users/${user.id}`, user).pipe(map((user:User) => {
      if(typeof window != undefined){
       localStorage.setItem('currentUser', JSON.stringify(user));
      }
       return user;
     }));
  }
  
}
