import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TopicsService } from 'src/app/services/topics.service';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit, OnDestroy {

  topics: any;
  topicsSubscription!: Subscription;

  constructor(private topicService: TopicsService) { }

  ngOnInit(): void {
    this.topicsSubscription = this.topicService.topicsSubject
      .subscribe((topics: any) => {
        this.topics = topics;
      });
    this.topicService.getTopics();
  }

  filterList(event: any): void {
    this.topicService.filterTopics(event.target.value);
  }

  ngOnDestroy(): void {
    this.topicsSubscription?.unsubscribe();
  };

}
