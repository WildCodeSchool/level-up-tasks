import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { UserInfo } from '../../model/user/token';

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

  getUserInfo(): UserInfo | null {
    const decodedToken = this.getDecodedToken();
    if (decodedToken) {
      return {
        fullName: decodedToken.user_fullName,
        id: decodedToken.user_id
      };
    }
    return null;
  }
}
