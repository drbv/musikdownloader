import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  files: Set<File> = new Set<File>();

  constructor() {}

  public upload(file: File) {

    console.log("add file:", file);
    if (!file) {
      return;
    }

    this.files.add(file);
    this.files.add(file);
  }

  public getFiles() {
    return this.files;
  }
}
