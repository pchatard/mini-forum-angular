import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  updateUserForm!: FormGroup;

  constructor(private auth: AuthService, private formBuilder: FormBuilder, private userService: UsersService) { }

  ngOnInit(): void {
    this.updateUserForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      passwordConfirm: ['', [Validators.required]],
      oldPassword : ['', [Validators.required]]
    })
  }

  getUsernameErrors(): string | void {
    if (this.updateUserForm.controls.username.hasError('required')) {
      return 'This field is required';
    }
  }

  getPasswordErrors(): string | void {
    if (this.updateUserForm.controls.password.hasError('required')) {
      return 'This field is required';
    }
    if (this.updateUserForm.controls.password.hasError('maxlength')) {
      return 'You\'ve exceeded the limit of character. (at most 50 characters)';
    }

    if (this.updateUserForm.controls.password.hasError('minlength')) {
      return 'There is not enough characters. (at least 3 characters)';
    }

    if (this.updateUserForm.controls.password.hasError('pattern')) {
      return 'At least 1 uppercase, 1 lowercase, 1 number, 1 special character, at least 8 characters in total.';
    }
  }

  getConfirmPasswordMismatch(): string | void{
    const password = this.updateUserForm.controls.password.value;
    const confirmPassword = this.updateUserForm.controls.passwordConfirm.value;
    if (password!==confirmPassword)
    {
      return 'The passwords must match each other.';
    }
  }

  getOldPasswordErrors(): string | void {
    if (this.updateUserForm.controls.oldPassword.hasError('required')) {
      return 'This field is required';
    }
  }


  onSubmit(): void {
    this.userService.modifyUser({ ...this.updateUserForm.value, id: this.auth.user.id });
    this.buildForm();
  }

  deleteAccount(): void {
    this.userService.deleteUser(this.auth.user.id);
  }

  buildForm(): void {
    this.updateUserForm = this.formBuilder.group({
      username: [this.auth.user.username, [Validators.required]],
      password: ['', [Validators.required]],
      passwordConfirm: ['', [Validators.required]],
      oldPassword: ['', [Validators.required]]
    });
  }

}
