import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TopicsService } from 'src/app/services/topics.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit, OnDestroy {
  topic: any;
  messages: any;
  topicSubscription!: Subscription;

  constructor(private topicService: TopicsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const topicId: number = this.route.snapshot.params['id'];
    this.topicSubscription = this.topicService.topicSubject
      .subscribe((topic: any) => {
        this.topic = topic;
      });
    this.topicService.getTopic(topicId);
  };

  ngOnDestroy(): void {
    this.topicSubscription?.unsubscribe();
  }

}
