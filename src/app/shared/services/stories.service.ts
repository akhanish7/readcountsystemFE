import { Injectable } from '@angular/core';
import { Story } from './../../story';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class StoriesService {
  story: Story;
  accessToken: string;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    public router: Router
  ) {}

  getStory(id: string): Observable<any> {
    this.getaccessToken();
    if (!this.accessToken) {
      this.router.navigateByUrl('/');
    }
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-key': this.accessToken,
    });
    let options = { headers: headers };
    return this.http.get(`http://localhost:7777/story/${id}`, options);
  }

  async getaccessToken() {
    await (this.accessToken = sessionStorage.getItem('x-access-key'));
  }

  getStories(): Observable<any> {
    this.getaccessToken();
    if (!this.accessToken) {
      this.router.navigateByUrl('/');
    }
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-key': this.accessToken,
    });
    let options = { headers: headers };
    return this.http.get('http://localhost:7777/story', options);
  }
}
