import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  selectedOption: string;
  optionChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  setOption(option: string) {
    this.selectedOption = option;
    this.optionChanged.emit(option);
  }

}
