import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {UploadService} from './upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styles: []
})
export class UploadComponent implements OnInit {

  constructor(private fb: FormBuilder, private uploadService: UploadService) { }

  ngOnInit() {
  }

  onFileInput(event) {

    if (!(event.target.files && event.target.files.length)) {
      return;
    }

    const [file] = event.target.files;

    this.uploadService.upload(file);
  }

  getFiles(): Set<File> {

    console.log('files: ', this.uploadService.getFiles());
    return this.uploadService.getFiles();
  }

}
