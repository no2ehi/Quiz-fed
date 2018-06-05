import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private selectedQuestion = new Subject<any>();
  questionSelected = this.selectedQuestion.asObservable();

  private selectedQuiz = new Subject<any>();
  quizSelected = this.selectedQuiz.asObservable();

  constructor(private http: HttpClient) { }


  getQeustions() {
    return this.http.get('https://localhost:44340/api/questions');
  }

  postQuestion(question) {
    this.http.post('https://localhost:44340/api/questions', question).subscribe(res => {
      console.log(res);
    });
  }

  selectQuestion(question) {
    this.selectedQuestion.next(question);
  }

  editQuestion(question) {
    this.http.put(`https://localhost:44340/api/questions/${question.id}`, question).subscribe(res => {
      console.log(res);
    })
  }



  getQuizzes() {
    return this.http.get('https://localhost:44340/api/quizzes');
  }

  postQuiz(quiz) {
    this.http.post('https://localhost:44340/api/quizzes', quiz).subscribe(res => {
      console.log(res);
    });
  }

  selectQuiz(quiz) {
    this.selectedQuiz.next(quiz);
  }

  editQuiz(quiz) {
    this.http.put(`https://localhost:44340/api/quizzes/${quiz.id}`, quiz).subscribe(res => {
      console.log(res);
    });
  }


}
