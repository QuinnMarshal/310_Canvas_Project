import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { DiscussionComponent } from './discussion/discussion.component';

const routes: Routes = [
  {path: 'announcements', component:AnnouncementsComponent},
  {path: 'discussion', component:DiscussionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AnnouncementsComponent, DiscussionComponent];