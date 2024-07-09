import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { User } from '../../model/user/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  apiUrl= 'http://localhost:8080';
  httpClient:HttpClient = inject(HttpClient);

  constructor() { }

  public login(email:string, password:string):Observable<any> {
    
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post<any>(`${this.apiUrl}/users/login`,{ email, password },{headers,responseType: 'text' as 'json'}).pipe(tap(response => {
    if(response && typeof window != undefined){
     localStorage.setItem('token', response);
    }
   }));
  }

  logout() {
    if(typeof window != undefined){
      localStorage.removeItem('token');
    }
  }

  getToken(): string | null {
    if(typeof(Storage) !== "undefined"){
      return localStorage.getItem('token');
    }
    return null;
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

}
