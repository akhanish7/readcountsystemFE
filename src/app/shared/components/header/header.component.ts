import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  loggedIn: boolean;

  logout() {
    sessionStorage.removeItem('x-access-key');
    this.loggedIn = false;
    this.router.navigate(['']);
  }

  checkLogin() {
    if (sessionStorage.getItem('x-access-key')) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }

  ngOnInit(): void {
    this.checkLogin();
  }
}
