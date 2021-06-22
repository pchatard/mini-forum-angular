import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  topics: any;
  topic: any;

  topicsSubject = new Subject();
  topicSubject = new Subject();

  constructor(private http: HttpClient) { }

  createTopic(newTopic: any): void {
    this.http.post(`${environment.apiUrl}api/topic`, newTopic).subscribe(responseFromApi => {
      this.getTopics();
    }, error => {
      console.log(error);
    });
  };

  getTopics(): void {
    this.http.get(`${environment.apiUrl}api/topic`).subscribe(topicsList => {
      this.topics = topicsList;
      this.topicsSubject.next(this.topics);
    }, error => {
      console.log(error);
    });
  };

  getTopic(id: number): void {
    this.http.get(`${environment.apiUrl}api/topic/${id}`).subscribe(APItopic => {
      this.topic = APItopic;
      this.topicSubject.next(this.topic);
    }, error => {
      console.log(error);
    });
  };

  changeTopic(topic: any, id: number): void {
    this.http.patch(`${environment.apiUrl}api/topic/${id}`, topic).subscribe(topicChanged => {
      this.getTopics();
    },
      error => {
        console.log(error);
      });
  };

  deleteTopic(id: number): void {
    this.http.delete(`${environment.apiUrl}api/topic/${id}`).subscribe(deletedTopic => {
      this.getTopics();
    },
      error => {
        console.log(error);
      });
  };

  createMessage(newMessage: any): void {
    this.http.post(`${environment.apiUrl}api/message`, newMessage).subscribe(returnMessage => {
      this.getTopic(newMessage.topic.id);
    }, error => {
      console.log(error);
    });
  };

};