import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TopicsService } from 'src/app/services/topics.service';

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

  constructor(private formBuilder: FormBuilder, private topicService: TopicsService) {
    this.showUpdateElements = false;
    this.showInformation = false;
  }

  ngOnInit() {
    this.updateTopicForm = this.formBuilder.group({
      title: [this.topic.title, [Validators.required]]
    });
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

  deleteTopic(): void {
    this.topicService.deleteTopic(this.topic.id);
  };

  showDetails(): void {
    this.showInformation = true;
  };

  hideDetails(): void {
    this.showInformation = false;
  }

}
