import { Component, OnInit } from '@angular/core';
import { Story } from '../../../story';
import { StoriesService } from '../../services/stories.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css'],
})
export class StoryComponent implements OnInit {
  // story: Story;
  story: any;
  state: Observable<object>;

  constructor(
    private storyService: StoriesService,
    public activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.state$ = this.activatedRoute.paramMap.pipe(
    //   map(() => {
    //     console.log(window.history.state);
    //   })
    // );
    this.state = window.history.state.hello;
    console.log(this.state);
    console.log(typeof this.state);
  }
}
