import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
  response: any;
  passwordMatch: boolean = true;
  url: string = `${environment.URL}/signup`;
  constructor(private authService: AuthService, private router: Router) {}

  signUp() {
    if (this.password === this.repeatPassword) {
      this.authService
        .signUpUser(this.url, this.username, this.email, this.password)
        .subscribe((res) => {
          this.response = res;
          let statusCode = res.status;

          if (statusCode == 200) {
            this.router.navigate(['/']);
          }
        });
    } else {
      this.passwordMatch = false;
    }
  }

  ngOnInit(): void {}
}
