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
    this.buildForm();
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
