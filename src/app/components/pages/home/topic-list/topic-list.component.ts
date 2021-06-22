import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TopicsService } from 'src/app/services/topics.service';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit, OnDestroy {

<<<<<<< HEAD
  topics: any[] = [{ id: 1, title: 'A' }, { id: 2, title: 'B' }, { id: 3, title: 'C' }, { id: 4, title: 'D' }];
=======
  topics: any;
  topicsSubscription!: Subscription;
>>>>>>> a2f9a56f3ecde8d32a16dd38ae2a50b4bf895e8a

  constructor(private topicService: TopicsService) { }

  ngOnInit(): void {
    this.topicsSubscription = this.topicService.topicsSubject
    .subscribe((topics: any) => {
      this.topics=topics;
    });
    this.topicService.getTopics();
  }

  ngOnDestroy(): void {
    this.topicsSubscription?.unsubscribe();
  }

}
