import { Injectable } from '@angular/core';
import { Story } from './../../story';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import {Users} from '../../users';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class StoriesService {
  story: Story;
  // userData:Users;
  constructor(private http: HttpClient, private authService: AuthService) {}

  getStory(id: string): Observable<any> {
    let accessToken = this.authService.res.accessToken;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': accessToken,
    });
    let options = { headers: headers };
    return this.http.get(`http://localhost:7777/story/${id}`, options);
    // return this.http.get(`http://localhost:7777/story/${id}`);
  }

  getStories() {
    let accessToken = this.authService.res.accessToken;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': accessToken,
    });
    let options = { headers: headers };
    return this.http.get('http://localhost:7777/story', options);
    // return this.http.get('http://localhost:7777/story');
  }
}
