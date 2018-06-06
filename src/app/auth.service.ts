import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private route: Router) { }

  get isAuthenticated() {
    return !!localStorage.getItem('token');
  }

  register(credentials) {
    this.http.post<any>(`http://localhost:63100/api/account`, credentials).subscribe(res => {
      this.authenticate(res);
    })
  }

  login(credentials) {
    this.http.post<any>('http://localhost:63100/api/account/login', credentials).subscribe(res => {
      this.authenticate(res);
    })
  }

  authenticate(res) {
    localStorage.setItem('token', res);

    this.route.navigate(['/']);
  }

  logout() {
    localStorage.removeItem('token');
  }

}
