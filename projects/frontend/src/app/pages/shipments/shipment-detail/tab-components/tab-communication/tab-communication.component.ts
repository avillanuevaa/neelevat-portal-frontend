import { Component } from '@angular/core';
import { USER_MOCK } from '@entities/user-form/constants/user-form.constant';
import { IUser } from '@entities/user-form/interfaces/user.interface';
@Component({
  selector: 'app-tab-communication',
  templateUrl: './tab-communication.component.html',
  styleUrls: ['./tab-communication.component.scss']
})
export class TabCommunicationComponent {
  public user: IUser = USER_MOCK;
  constructor() { }

  ngOnInit(): void {
    console.log("...");
  }

}
