import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoststoryComponent } from './poststory.component';

describe('PoststoryComponent', () => {
  let component: PoststoryComponent;
  let fixture: ComponentFixture<PoststoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoststoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoststoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
