import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { QuestionComponent } from './question/question.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizzesComponent } from './quizzes/quizzes.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'quizzes', component: QuizzesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
