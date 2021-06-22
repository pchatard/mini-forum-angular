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
      content: ['', [Validators.required] /* Validators go here */]
    })
  };

  onSubmit(): void {
    const newMessage = this.messageForm.value;
    newMessage.user = this.auth.user;
    newMessage.topic = this.topic;
    newMessage.date = Date.now();
    console.log(newMessage);
    this.topicService.createMessage(newMessage);
    };

}
