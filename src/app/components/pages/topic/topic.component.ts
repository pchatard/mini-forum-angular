import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  topic : any = {id:1, title:'Topic title', date: '20/20/1970', messages:[{content:'this is how we do it', author:'Pierre'},{content:'this is how we do it',author:'Chatarde'},{content:'this is how we do it',author:'Jad'}], author:'User'}; //type topic
  constructor() { }

  ngOnInit(): void {
    
  }

}
