import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  question = {};
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.questionSelected.subscribe(q => this.question = q);
  }

  post(question) {
    this.api.postQuestion(question);
  }

}
