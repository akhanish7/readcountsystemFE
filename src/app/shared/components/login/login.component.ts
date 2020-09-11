import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Users } from '../../../users';

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
  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}
  url = 'http://localhost:7777/signin';
  sendResToService() {
    this.authService.res = this.res;
  }

  login() {
    this.authService
      .loginVerify(this.url, this.username, this.password)
      .subscribe(
        (response) => {
          this.res = response.body;
          this.sendResToService();
          this.statusCode = response.status;
          if (this.statusCode === 200) {
            this.router.navigate(['/home']);
          }
        }
        //(error) => console.log(error)
      );
  }

  ngOnInit(): void {}
}
