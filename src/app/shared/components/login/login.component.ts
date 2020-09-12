import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Users } from '../../../users';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  accessToken: string;
  res: Users;
  statusCode: any;
  usernameValid: boolean = true;
  passwordValid: boolean = true;
  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}
  url = 'http://localhost:7777/signin';
  saveAccessToken() {
    sessionStorage.setItem('x-access-key', this.res.accessToken);
  }

  login() {
    this.authService
      .loginVerify(this.url, this.username, this.password)
      .subscribe(
        (response) => {
          this.res = response.body;
          this.saveAccessToken();
          this.statusCode = response.status;
          if (this.statusCode === 200) {
            this.router.navigate(['/home']);
          }
        },
        (error) => {
          if (error instanceof HttpErrorResponse) {
            if (error.error instanceof ErrorEvent) {
              console.error('Error Event');
            } else {
              console.log(`error status : ${error.status} ${error.statusText}`);
              switch (error.status) {
                case 404: //Invalid User
                  this.usernameValid = false;
                  break;
                case 401: //Invalid Password
                  this.passwordValid = false;
                  break;
              }
            }
          } else {
            console.error('some thing else happened');
          }
          return throwError(error);
        }
      );
  }

  ngOnInit(): void {}
}
