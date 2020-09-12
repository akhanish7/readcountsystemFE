import { Component, OnInit } from '@angular/core';
import { Story } from '../../../story';
import { StoriesService } from '../../services/stories.service';
import { SocketIOService } from '../../services/socket-io.service';

import { ActivatedRoute, Router } from '@angular/router';

import { throwError } from 'rxjs/internal/observable/throwError';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css'],
})
export class StoryComponent implements OnInit {
  story: Story;
  activeUsers: number;

  constructor(
    private storyService: StoriesService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    private socketService: SocketIOService
  ) {
    this.getActiveUsers();
  }

  getStory() {
    this.storyService
      .getStory(this.activatedRoute.snapshot.params.id)
      .subscribe(
        (story) => {
          this.story = story;
          this.activeUsers = this.socketService.activeUser;
          console.log(this.activeUsers);
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
            console.error('some thing else happened');
          }
          return throwError(error);
        }
      );
  }

  getActiveUsers() {
    this.socketService.setupSocketConnection();
  }

  ngOnInit(): void {
    this.getStory();
  }
}
