import { Message } from "@angular/compiler/src/i18n/i18n_ast";

interface Topic {
    id: number;
    title: string;
    date: Date;
    author: User;
    messages: Message;
}