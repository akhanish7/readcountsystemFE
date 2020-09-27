import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { LoginComponent } from './shared/components/login/login.component';
import { PoststoryComponent } from './shared/components/poststory/poststory.component';
import { SignupComponent } from './shared/components/signup/signup.component';
import { StoryComponent } from './shared/components/story/story.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'story/:id', component: StoryComponent },
  { path: 'poststory', component: PoststoryComponent },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
