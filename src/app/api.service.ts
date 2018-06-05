import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  getQeustions() {
    return this.http.get('https://localhost:44340/api/questions');
  }

  postQuestion(question) {
    this.http.post('https://localhost:44340/api/questions', question).subscribe(res => {
      console.log(res);
    });
  }

}
