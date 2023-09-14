import { Inject, Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = [];
  environment;

  constructor(@Inject('environment') environment) {
    this.environment = environment;
  }

  add(message: any): void {
    if (!this.environment.production) {
      console.log(message);
    }
    this.messages.push(message);
  }

  clear(): void {
    this.messages = [];
  }
}
