import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TopicsService } from 'src/app/services/topics.service';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-topic-list-item',
  templateUrl: './topic-list-item.component.html',
  styleUrls: ['./topic-list-item.component.css']
})
export class TopicListItemComponent implements OnInit {

  @Input() topic!: any;
  showUpdateElements: boolean;
  updateTopicForm!: FormGroup;
  showInformation: boolean;

  constructor(private formBuilder: FormBuilder, private topicService: TopicsService, private dialog: MatDialog) {
    this.showUpdateElements = false;
    this.showInformation = false;
  }

  ngOnInit() {
    this.updateTopicForm = this.formBuilder.group({
      title: [this.topic.title, [Validators.required, Validators.minLength(5), Validators.maxLength(100)]]
    });
  }

  getTitleErrors(): string | void {
    if (this.updateTopicForm.controls.title.hasError('required')) {
      return 'This field is required';
    }
    if (this.updateTopicForm.controls.title.hasError('maxlength')) {
      return 'You\'ve exceeded the limit of character. (at most 100 characters)'
    }

    if (this.updateTopicForm.controls.title.hasError('minlength')) {
      return 'There is not enough characters. (at least 5 characters)'
    }
  }

  onSubmit(): void {
    this.topicService.changeTopic(this.updateTopicForm.value, this.topic.id);
    this.showUpdateElements = false;
  }

  updateTopic(): void {
    this.showUpdateElements = true;
  }

  saveChanges(): void {
    this.onSubmit();
  }

  openDialog() {
    this.dialog.open(DialogComponent, { data: { id: this.topic.id } });
  }

  showDetails(): void {
    this.showInformation = true;
  };

  hideDetails(): void {
    this.showInformation = false;
  }

}
