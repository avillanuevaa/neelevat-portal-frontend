import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import {NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-tag-filter',
  templateUrl: './tag-filter.component.html',
  styleUrls: ['./tag-filter.component.scss', '../../shared/components/form-elements/form-elements.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TagFilterComponent,
      multi: true
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagFilterComponent {
  newTag: string = '';
  @ViewChild('tagInput') tagInput!: ElementRef<HTMLInputElement>;

  @Input() public label: string;
  @Input() tags: string[] = [];

  @Output() newItemEvent = new EventEmitter<string>();
  @Output() removeItemEvent = new EventEmitter<number>();

  addTag() {
    if (this.newTag.trim() !== '') {
      this.newItemEvent.emit(this.newTag.trim())
      // this.tags.push(this.newTag.trim());
      this.newTag = '';
    }
  }

  removeTag(index: number) {
    this.removeItemEvent.emit(index);
    // this.tags.splice(index, 1);
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.addTag();
    }
  }

}
