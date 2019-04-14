import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {FileTypeService} from '../../modules/parser/parser-factory/file-type.service';

@Injectable({
  providedIn: 'root'
})
export class UploadService
{
  private subject: Subject<File> = new Subject();
  private uploadedFiles: Set<File> = new Set<File>();

  constructor(private fileTypeService: FileTypeService)
  {
  }

  public upload(file: File): boolean
  {
    if (!file)
    {
      return false;
    }

    if (!this.fileTypeService.isFileTypeSupported(file))
    {
      return false;
    }

    this.uploadedFiles.add(file);
    this.subject.next(file);

    return true;
  }

  public getUploadedFileObservable(): Subject<File>
  {
    return this.subject;
  }

  getUploadedFiles(): Set<File>
  {
    return this.uploadedFiles;
  }

  public removeFile(file: File)
  {
    this.uploadedFiles.delete(file);
  }
}
