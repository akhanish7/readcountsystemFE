import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Router } from '@angular/router';
import { StoriesService } from '../../services/stories.service';
import { throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-poststory',
  templateUrl: './poststory.component.html',
  styleUrls: ['./poststory.component.css'],
})
export class PoststoryComponent implements OnInit {
  constructor(private storyService: StoriesService, private router: Router) {}
  title: string;
  content: string;
  titleExist: boolean = false;
  message: object;
  response: boolean;
  postStory() {
    this.storyService.postStory(this.title, this.content).subscribe(
      (res) => {
        this.message = res;
        this.response = true;
        console.log(res);
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 2000); //2s
      },
      (error) => {
        if (error instanceof HttpErrorResponse) {
          if (error.error instanceof ErrorEvent) {
            this.titleExist = true;
            console.error('Error Event');
          } else {
            console.log(`error status : ${error.status} ${error.statusText}`);
            this.titleExist = true;
            switch (error.status) {
              case 403: //Wrong Token
                console.log(error);
                this.titleExist = true;

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

  ngOnInit(): void {}
}
