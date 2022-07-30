import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import  {RouterModule, Routes} from '@angular/router'
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
import { MessageComponent } from './message/message.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import { GradeComponent } from './grade/grade.component';
//mat stuff for UI
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const appRoutes: Routes =[
  {
    path:'',
    component:LoginComponent
  },
  {path: 'main', component:MainComponent},
  {path: 'register', component:RegisterComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    MainComponent,
    LoginComponent,
    AssignmentComponent,
    QuizzesComponent,
    ModulesComponent,
    MessageComponent,
    RegisterComponent,
    GradeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MatExpansionModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
