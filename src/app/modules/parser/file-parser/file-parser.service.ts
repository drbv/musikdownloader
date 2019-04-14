import {Injectable} from '@angular/core';
import {ParserFactoryService} from '../parser-factory/parser-factory.service';
import {FileTypeService} from '../parser-factory/file-type.service';
import {ParserResult} from '../file-definition/ParserResult';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileParserService {

  constructor(private parserFactory: ParserFactoryService, private fileTypeService: FileTypeService) { }

  parse(file: File): Observable<ParserResult>
  {
    const parser = this.parserFactory.getParser(file);

    console.log('found parser: ', parser);

    const subject = new Subject<ParserResult>();

    parser.parse(file).then(result => {

      const parserResult = {
        competitionNumber: this.getCompetionNumber(file),
        fileType: this.fileTypeService.getFileType(file),
        dataModel: this.getDataModelId(file),
        data: result
      };

      subject.next(parserResult);
    });

    return subject;
  }

  private getDataModelId(file: File) {
    if (!file)
    {
      return 0;
    }

    return parseInt(file.name.substr(0, 1), 0);
  }

  private getCompetionNumber(file: File): number
  {
    if (!file)
    {
      return 0;
    }

    return parseInt(file.name.substr(2, 7), 0);
  }
}
