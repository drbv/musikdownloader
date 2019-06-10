import {Injectable} from '@angular/core';
import {ParserFactoryService} from '../parser-factory/parser-factory.service';
import {FileTypeService} from '../parser-factory/file-type.service';
import {ParserResult} from '../file-definition/parser-result.interface';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileParserService {

  constructor(private parserFactory: ParserFactoryService, private fileTypeService: FileTypeService) { }

  parse(file: File): Observable<ParserResult> {
    const parser = this.parserFactory.getParser(file);

    console.log('found parser: ', parser);

    const subject = new Subject<ParserResult>();

    parser.parse(file).then(result => {

      const parserResult: ParserResult = {
        competitionNumber: this.getCompetionNumber(file),
        fileType: this.fileTypeService.getFileType(file),
        data: result
      };

      subject.next(parserResult);
    });

    return subject;
  }

  private getCompetionNumber(file: File): number {
    if (!file) {
      return 0;
    }

    console.log('filename: ', file.name);

    return parseInt(file.name.substr(0, 7), 0);
  }
}
