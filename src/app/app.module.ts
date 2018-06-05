import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Added Module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';

import { QuestionComponent } from './question/question.component';
import { QuestionsComponent } from './questions/questions.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IndexComponent } from './index/index.component';

import { ApiService } from './api.service';
import { QuizComponent } from './quiz/quiz.component';
import { QuizzesComponent } from './quizzes/quizzes.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionsComponent,
    NavbarComponent,
    IndexComponent,
    QuizComponent,
    QuizzesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
