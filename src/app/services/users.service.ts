import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  register(newUser: any, rememberMe: boolean): void {
    this.http.post(`${environment.apiUrl}api/user`, newUser).subscribe(user => {
      this.auth.login({ username: newUser.username, password: newUser.password }, rememberMe);
    }, error => {
      console.log(error);
    });
  }

  modifyUser(user: any): void {
    this.http.patch(`${environment.apiUrl}api/user/${user.id}`, { username: user.username, password: user.password, passwordConfirm: user.passwordConfirm, oldPassword: user.oldPassword }).subscribe(updatedUser => {
      console.log(updatedUser);
    }, error => {
      console.log(error);
    });
  }

  deleteUser(userId: number): void {
    this.http.delete(`${environment.apiUrl}api/user/${userId}`).subscribe(() => {
      this.auth.logout();
    }, error => {
      console.log(error);
    })
  }
}
