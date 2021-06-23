import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private auth: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      rememberMe: false
    });
  };

  getUsernameErrors(): string | void {
    if (this.loginForm.controls.username.hasError('required')) {
      return 'This field is required';
    }
  }

  getPasswordErrors(): string | void {
    if (this.loginForm.controls.password.hasError('required')) {
      return 'This field is required';
    }
  }

  onSubmit(): void {
    const { rememberMe, ...credentials } = this.loginForm.value;
    this.auth.login(credentials, rememberMe);
  };
}
