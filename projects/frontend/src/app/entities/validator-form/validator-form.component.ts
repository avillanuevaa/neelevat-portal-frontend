import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-validator-form',
  templateUrl: './validator-form.component.html',
  styleUrls: ['./validator-form.component.scss']
})
export class ValidatorFormComponent {

  @Input() fields: any[] = [];
  @Output() formSent = new EventEmitter<any>();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({});
  }

  sendForm(){
    if (this.form.valid) {
      this.formSent.emit(this.form.value);
    }
  }

}
