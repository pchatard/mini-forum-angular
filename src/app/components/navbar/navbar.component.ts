import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isUserConnected: boolean = false;
  userSubscription!: Subscription;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.userSubscription = this.auth.userSubject.subscribe(user => {
      if (user) {
        this.isUserConnected = true;
      } else {
        this.isUserConnected = false;
      }
    });
  }

  logout(): void {
    this.auth.logout();
  }

}
