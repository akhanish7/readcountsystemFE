import { Injectable } from '@angular/core';

import { Users } from '../../users';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  res: Users;

  loginVerify(
    url: string,
    username: string,
    password: string
  ): Observable<any> {
    return this.http.post(
      url,
      { username: username, password: password },
      { observe: 'response' }
    );
  }

  signUpUser(
    url: string,
    username: string,
    email: string,
    password: string
  ): Observable<any> {
    return this.http.post(
      url,
      {
        username: username,
        email: email,
        password: password,
      },
      { observe: 'response' }
    );
  }
}
