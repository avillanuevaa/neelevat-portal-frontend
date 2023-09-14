import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MessageService } from 'projects/tools/src/lib/message/message.service';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  showSpinner = new BehaviorSubject<boolean>(false);

  constructor(private message: MessageService) { }

  show(loadingCount: number = 0): void {
    this.showSpinner.next(true);
  }

  hide(): void {
    this.showSpinner.next(false);
  }
}
