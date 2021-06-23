import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { TopicsService } from 'src/app/services/topics.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {
  messageForm!: FormGroup;
  @Input() topic!: any;
  constructor(private formBuilder: FormBuilder, private topicService: TopicsService, private auth: AuthService) { }

  ngOnInit(): void {
    this.messageForm = this.formBuilder.group({
      content: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(1000)]]
    })
  };

  getContentErrors(): string | void {
    if (this.messageForm.controls.content.hasError('required')) {
      return 'This field is required';
    }
    if (this.messageForm.controls.content.hasError('maxlength')) {
      return 'You\'ve exceeded the limit of character. (at most 1000 characters)'
    }

    if (this.messageForm.controls.content.hasError('minlength')) {
      return 'There is not enough characters. (at least 5 characters)'
    }
  }

  onSubmit(): void {
    const newMessage = this.messageForm.value;
    newMessage.user = this.auth.user;
    newMessage.topic = this.topic;
    newMessage.date = Date.now();
    this.topicService.createMessage(newMessage);
    this.messageForm.reset();
  };

}
