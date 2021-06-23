import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { TopicsService } from 'src/app/services/topics.service';

@Component({
  selector: 'app-topic-form',
  templateUrl: './topic-form.component.html',
  styleUrls: ['./topic-form.component.css']
})
export class TopicFormComponent implements OnInit {
  topicForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private topicService: TopicsService, private auth: AuthService) { }

  ngOnInit(): void {
    this.topicForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      content: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(1000)]]
    })
  };

  getTitleErrors(): string | void {
    if (this.topicForm.controls.title.hasError('required')) {
      return 'This field is required';
    }
    if (this.topicForm.controls.title.hasError('maxlength')) {
      return 'You\'ve exceeded the limit of character. (at most 100 characters)'
    }

    if (this.topicForm.controls.title.hasError('minlength')) {
      return 'There is not enough characters. (at least 5 characters)'
    }
  }
  
  getContentErrors(): string | void {
    if (this.topicForm.controls.content.hasError('required')) {
      return 'This field is required';
    }
    if (this.topicForm.controls.content.hasError('maxlength')) {
      return 'You\'ve exceeded the limit of character. (at most 1000 characters)'
    }

    if (this.topicForm.controls.content.hasError('minlength')) {
      return 'There is not enough characters. (at least 5 characters)'
    }
  }

  onSubmit(): void {
    const newTopic = this.topicForm.value;
    newTopic.user = this.auth.user;
    newTopic.date = Date.now();
    this.topicService.createTopic(newTopic);
    this.topicForm.reset();
  };

}
