import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  getDecodedToken(): any {
    if(typeof(Storage) !== "undefined") {
      const token = localStorage.getItem('token');
    if (token) {
      return jwtDecode(token);
    }
    return null;
  }
}

  getUserId(): any {
    const decodedToken = this.getDecodedToken();
    if (decodedToken) {
      return {
       username: decodedToken.user_fullName,
        id: decodedToken.user_id
      };
    }
    return null;
  }
}
