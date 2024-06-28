import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../../model/user/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  apiUrl= 'http://localhost:8080';
  httpClient:HttpClient = inject(HttpClient);

  constructor() { }

  public login(email:string, password:string):Observable<User> {
    return this.httpClient.post<any>(`${this.apiUrl}/users/login`,{ email, password }).pipe(map((user:User) => {
    if(typeof window != undefined){
     localStorage.setItem('currentUser', JSON.stringify(user));
    }
     return user;
   }));
  }

  public isLogged(): boolean {
    if(typeof(Storage) !== "undefined"){
      return localStorage.getItem('currentUser') !== null;
    }
    return false;
  }
 
  public getUser(): User {
    if(typeof(Storage) !== "undefined"){
      return JSON.parse(localStorage.getItem('currentUser') || '{}');

    }else{
      return {} as User;
    }
  }

 

 public logout():void {
  localStorage.removeItem('currentUser');
}
}
