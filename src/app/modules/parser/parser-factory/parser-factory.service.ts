import {Injectable} from '@angular/core';
import {CsvParser} from '../parsers/CsvParser';
import {IParser} from '../file-definition/IParser';
import {FileTypeService} from './file-type.service';
import {FileType} from '../../../enums/FileType';


@Injectable({
  providedIn: 'root'
})
export class ParserFactoryService {

  constructor(private fileTypeService: FileTypeService) { }

  public getParser(file: File): IParser {

    let parser: IParser;

    const fileType = this.fileTypeService.getFileType(file);

    switch (fileType)
    {
      case FileType.FILETYPE_CSV:
      {
        parser = new CsvParser();
        break;
      }
      default:
      {
        parser = new CsvParser();
        break;
      }
    }
    return parser;
  }
}
