import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { ModulesComponent } from './modules/modules.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { MessageComponent } from './message/message.component';


const routes: Routes = [
  {path: 'announcements', component:AnnouncementsComponent},
  {path: 'discussion', component:DiscussionComponent},
  {path: 'assignment', component:AssignmentComponent},
  {path: 'quizzes', component:QuizzesComponent},
  {path: 'modules', component:ModulesComponent},
  {path: 'main', component:MainComponent},
  {path: 'login', component:LoginComponent},
  {path: 'message', component:MessageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MessageComponent, AnnouncementsComponent, DiscussionComponent, AssignmentComponent,QuizzesComponent,ModulesComponent,MainComponent,LoginComponent];