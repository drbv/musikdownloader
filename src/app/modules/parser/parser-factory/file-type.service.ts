import {Injectable} from '@angular/core';
import {FileType} from '../../../enums/FileType';

@Injectable({
  providedIn: 'root'
})
export class FileTypeService {

  constructor() { }

  public getFileType(file: File): FileType
  {
    return this.parseFileExtension(file);
  }

  public isFileTypeSupported(file)
  {
    return FileType.FILETYPE_INVLID !== this.parseFileExtension(file);
  }

  public parseFileExtension(file: File): FileType
  {
    const extension = file.name.split('.').pop();

    return this.isValidFileType(extension) ? extension as FileType : FileType.FILETYPE_INVLID;
  }

  private isValidFileType(extension: string)
  {
    let isValid = false;

    switch (extension)
    {
      case FileType.FILETYPE_CSV:
      {
        isValid = this.validateFileExtension(extension);
        break;
      }
      default:
        isValid = false;
        break;
    }

    return isValid;
  }

  private validateFileExtension(extension: string)
  {
    return Object.values(FileType).includes(extension);
  }
}
