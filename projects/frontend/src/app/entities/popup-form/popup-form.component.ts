import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EButtonColor} from "@shared/components/button/enums/button.enum";

@Component({
  selector: 'app-popup',
  templateUrl: './popup-form.component.html',
  styleUrls: ['./popup-form.component.scss']
})
export class PopupFormComponent {

  @Input() title: string = 'Add Item';
  @Output() cancel = new EventEmitter<void>();
  @Output() create = new EventEmitter<any>();
  form: FormGroup;
  showNotification: boolean = false;
  notificationMessage: string = '';

  public btnColor: typeof EButtonColor = EButtonColor;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.form = this.fb.group({
      language: ['', Validators.required],
      type: ['', Validators.required],
      alias: ['', Validators.required],
    });
  }

  onCancelClick(): void {
    this.cancel.emit();
  }

  onCreateClick(): void {
    if (this.form.valid) {
      this.create.emit(this.form.value);
      this.showSuccessNotification();
      this.form.reset();
    } else {
      this.showValidationErrors();
    }
  }

  showSuccessNotification(): void {
    this.snackBar.open('Successfully added', 'Close', {
      duration: 2000,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
    });
  }

  showValidationErrors(): void {
    Object.keys(this.form.controls).forEach((key) => {
      const control = this.form.get(key);
      control?.markAsTouched();
    });
  }

}
