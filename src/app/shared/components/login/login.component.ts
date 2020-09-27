import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Users } from '../../../users';
import { throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
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
  constructor(private router: Router, private authService: AuthService) {}
  url = `${environment.URL}/signin`;
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
            } else {
              switch (error.status) {
                case 404: //Invalid User
                  this.usernameValid = false;
                  break;
                case 401: //Invalid Password
                  this.passwordValid = false;
                  break;
              }
            }
          }
          return throwError(error);
        }
      );
  }

  ngOnInit(): void {}
}
