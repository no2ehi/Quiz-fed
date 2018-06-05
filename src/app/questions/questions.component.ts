import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  questions;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getQeustions().subscribe(q => {
      this.questions = q;
    })
  }

}
