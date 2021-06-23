import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UsersService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      passwordConfirmed: ['', [Validators.required]],
      rememberMe: false
    })
  }

  getUsernameErrors(): string | void {
    if (this.registerForm.controls.username.hasError('required')) {
      return 'This field is required';
    }
    if (this.registerForm.controls.username.hasError('maxlength')) {
      return 'You\'ve exceeded the limit of character. (at most 50 characters)'
    }

    if (this.registerForm.controls.username.hasError('minlength')) {
      return 'There is not enough characters. (at least 3 characters)'
    }
  }

  getPasswordErrors(): string | void {
    if (this.registerForm.controls.password.hasError('required')) {
      return 'This field is required';
    }
    if (this.registerForm.controls.password.hasError('maxlength')) {
      return 'You\'ve exceeded the limit of character. (at most 50 characters)';
    }

    if (this.registerForm.controls.password.hasError('minlength')) {
      return 'There is not enough characters. (at least 3 characters)';
    }

    if (this.registerForm.controls.password.hasError('pattern')) {
      return 'At least 1 uppercase, 1 lowercase, 1 number, 1 special character, at least 8 characters in total.';
    }
  }

  getConfirmedPasswordMismatch(): string | void {
    const password = this.registerForm.controls.password.value;
    const confirmPassword = this.registerForm.controls.passwordConfirmed.value;
    if (password !== confirmPassword) {
      return 'The passwords must match each other.';
    }
  }

  onSubmit(): void {
    const { rememberMe, ...credentials } = this.registerForm.value;
    this.userService.register(credentials, rememberMe);

  }
};


