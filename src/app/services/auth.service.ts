import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;
  userSubject= new Subject();

  constructor(private http: HttpClient, private router: Router) {
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user') || '');
    }
  }

  login(credentials: any): void {
    this.http.post(`${environment.apiUrl}login`, credentials).subscribe(user => {
      this.user = user;
      localStorage.setItem('user', JSON.stringify(this.user));
      this.userSubject.next(this.user);
      this.router.navigate(['']);
    }, error => {
      console.log(error);
    });
  }

  logout(): void {
    this.user = null;
    this.userSubject.next(this.user);
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }
}
