import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss']
})
export class QuizzesComponent implements OnInit {

  quizzes;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getQuizzes().subscribe(q => {
      this.quizzes = q;
    })
  }

}
