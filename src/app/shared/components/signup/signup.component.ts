import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
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
  constructor(private authService: AuthService, private router: Router) {}

  signUp() {
    this.authService
      .signUpUser(this.username, this.email, this.password)
      .subscribe((res) => {
        console.log(res);
        this.response = res;
        let statusCode = res.status;
        console.log(statusCode);
        if (statusCode == 200) {
          this.router.navigate(['/']);
        }
      });
  }

  ngOnInit(): void {}
}
