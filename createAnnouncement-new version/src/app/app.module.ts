import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { MainComponent } from './main/main.component';
import { DiscussionComponent} from './discussion/discussion.component';
import { LoginComponent } from './login/login.component';
import { routingComponents } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AssignmentComponent } from './assignment/assignment.component';
import { MatIconModule} from '@angular/material/icon';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { ModulesComponent } from './modules/modules.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    MainComponent,
    LoginComponent,
    AssignmentComponent,
    QuizzesComponent,
    ModulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
