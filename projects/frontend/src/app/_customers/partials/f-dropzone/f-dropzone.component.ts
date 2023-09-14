import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-f-dropzone',
  templateUrl: './f-dropzone.component.html',
  styleUrls: ['./f-dropzone.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FDropzoneComponent {

  @Input() model;
  @Output() modelChange: EventEmitter<any> = new EventEmitter();
  @Output() afterRemoveFile: EventEmitter<any> = new EventEmitter();
  @Input() allowedFiles: string[];
  @Input() maxSize = 0;

  public fileDataModel = null;
  public previewUrl = null;
  public errorMsg = '';

  constructor(
    private cdr: ChangeDetectorRef,
  ) { }


  get fileName() {
    return this.model ? this.model.name : null;
  }

  updateModel(fileInput: any) {
    const fileData = fileInput.target.files[0] as File;
    this.errorMsg = '';
    if (!fileData) {
      this.removeFile();
    } else {
      if (!((this.maxSize !== 0 && fileData.size <= this.maxSize) || this.maxSize === 0)) {
        this.errorMsg = `Max weight ${this.maxSize / 1000000}MB`
        this.removeFile();
      } else if (!(this.allowedFiles === undefined || (this.allowedFiles && this.allowedFiles.includes(fileData.type)))) {
        this.errorMsg = `Tipo de archivo no válido`;
        this.removeFile();
      } else {
        this.modelChange.next(fileData);
        this.preview(fileData);
      }
    }
  }

  private preview(f: File) {
    const mimeType = f.type;
    if (mimeType.match(/image\/*/) == null) {
      this.previewUrl = null;
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(f);
    reader.onload = (_event) => {
      this.previewUrl = reader.result;
      this.cdr.detectChanges();
      console.log(this.previewUrl);
    }

  }

  removeFile() {
    this.fileDataModel = null;
    this.previewUrl = null;
    this.modelChange.next(null);
    this.afterRemoveFile.emit();
  }

}
