import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  quiz = {};

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.quizSelected.subscribe(q => this.quiz = q);
  }

  post(quiz) {
    this.api.postQuiz(quiz);
  }

}
