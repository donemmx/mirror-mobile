import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  private messageSource = new BehaviorSubject({});
  currentMessage = this.messageSource.asObservable();

  constructor() {
    const message = sessionStorage.getItem('message') ?? '{}';
    this.messageSource.next(JSON.parse(message));
  }

  changeMessage(newMessage: object) {
    this.messageSource.next(newMessage);
    sessionStorage.setItem('message', JSON.stringify(newMessage));
  }

  getValue() {
    return this.messageSource.getValue();
  }
}
