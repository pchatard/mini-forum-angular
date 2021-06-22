interface Message {
    id: number;
    content: string;
    date: Date;
    topic: Topic;
    author: User;
}