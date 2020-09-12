import { Component, OnInit } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { StoriesService } from '../../services/stories.service';
import { throwError } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  stories: any;
  url: string = 'http://localhost:7777/story';

  async getStory(id: string) {
    this.router.navigateByUrl(`/story/${id}`);
  }

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,
    private storyService: StoriesService
  ) {}

  getStories() {
    this.storyService.getStories().subscribe(
      (res) => {
        this.stories = res;
      },
      (error) => {
        if (error instanceof HttpErrorResponse) {
          if (error.error instanceof ErrorEvent) {
            console.error('Error Event');
          } else {
            console.log(`error status : ${error.status} ${error.statusText}`);
            switch (error.status) {
              case 403: //Wrong Token
                this.router.navigateByUrl('/');
                break;
            }
          }
        } else {
          console.error(error);
        }
        return throwError(error);
      }
    );
  }

  ngOnInit(): void {
    this.getStories();
  }
}
