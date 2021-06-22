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
      title: ['', [Validators.required] /* Validators go here */],
      content: ['']
    })
  };

  onSubmit(): void {
    const newTopic = this.topicForm.value;
    newTopic.user = this.auth.user;
    newTopic.date = Date.now();
    this.topicService.createTopic(newTopic);
    this.topicForm.reset();
  };

}
