import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TopicsService } from 'src/app/services/topics.service';

export interface DialogData {
  id: number;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, private topicService: TopicsService) { }

  ngOnInit(): void {
  }

  deleteTopic(): void {
    this.topicService.deleteTopic(this.data.id);
  }

}
