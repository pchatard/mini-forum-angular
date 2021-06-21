import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-topic-list-item',
  templateUrl: './topic-list-item.component.html',
  styleUrls: ['./topic-list-item.component.css']
})
export class TopicListItemComponent implements OnInit {

  @Input() topic!: any;
  showUpdateElements: boolean;
  updateTopicForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.showUpdateElements = false;
  }

  ngOnInit() {
    this.updateTopicForm = this.formBuilder.group({
      title: [this.topic.title, [Validators.required]]
    });
  }

  onSubmit(): void {
    console.log(this.updateTopicForm.value);
    this.showUpdateElements = false;
  }

  updateTopic(): void {
    this.showUpdateElements = true;
    console.log('Update topic');
  }

  saveChanges(): void {
    this.onSubmit();
    console.log('Save changes');
  }

  deleteTopic(): void {
    console.log('Delete topic');
  }

}
