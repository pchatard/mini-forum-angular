import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {
  messageForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.messageForm = this.formBuilder.group({
      messageContent: ['', [Validators.required] /* Validators go here */]
    })
  };

  onSubmit(): void {
    console.log(this.messageForm.value);
  };

}
