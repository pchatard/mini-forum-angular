import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;

  constructor(private http: HttpClient, private router: Router) {
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user') || '');
    }
  }

  login(credentials: any, rememberMe: boolean): void {
    this.http.post(`${environment.apiUrl}login`, credentials).subscribe(user => {
      this.user = user;
      if (rememberMe) {
        localStorage.setItem('user', JSON.stringify(this.user));
      }
      this.router.navigate(['']);
    }, error => {
      console.log(error);
    });
  }

  logout(): void {
    this.user = null;
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }
}
