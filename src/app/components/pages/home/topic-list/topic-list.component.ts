import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {

  topics: any[] = [{ title: 'A' }, { title: 'B' }, { title: 'C' }, { title: 'D' }];

  constructor() { }

  ngOnInit(): void {
    // Get topics from api
  }

}
