import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { StoriesService } from '../../services/stories.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  stories: any;
  url: string = 'http://localhost:7777/story';

  async getStory(id: string) {
    await this.storyService.getStory(id).subscribe((story) => {
      // console.log(story);
      this.storyService.story = story;

      // this.router.navigateByUrl(`/story/${id}`);
      this.router.navigateByUrl(`/story/${id}`, {
        state: { hello: this.storyService.story },
      });
    });
  }

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,
    private storyService: StoriesService
  ) {}

  ngOnInit(): void {
    this.storyService.getStories().subscribe((res) => {
      this.stories = res;
    });
  }
}
