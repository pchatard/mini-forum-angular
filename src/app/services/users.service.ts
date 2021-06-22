import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  register(newUser: any): any {
    this.http.post(`${environment.apiUrl}api/user`, newUser).subscribe(user => {
      this.auth.login({ username: newUser.username, password: newUser.password });
    }, error => {
      console.log(error);
    });
  }
}
