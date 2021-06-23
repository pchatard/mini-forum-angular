import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersService } from 'src/app/services/users.service';
import { DialogData } from '../../home/topic-list/topic-list-item/dialog/dialog.component';

@Component({
  selector: 'app-dialog-account',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponentAccount implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, private userService: UsersService) { }

  ngOnInit(): void {
  }

  deleteAccount(): void {
    this.userService.deleteUser(this.data.id);
  }

}
