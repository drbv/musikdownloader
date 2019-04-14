import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileReaderService {

  reader: FileReader = new FileReader();

  constructor() { }

  readFile(file: File): string | ArrayBuffer {

    if (!file) {
      return null;
    }

    this.reader.readAsDataURL(file);

    console.log('file: ', this.reader.result);

    return this.reader.result;
  }
}
