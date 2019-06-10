import {Injectable} from '@angular/core';
import {UploadService} from '../upload/upload.service';
import {Subject} from 'rxjs';
import {SongFileInfo} from '../../models/SongFileInfo';
import {FileParserService} from '../../modules/parser/file-parser/file-parser.service';
import {ParserResult} from '../../modules/parser/file-definition/parser-result.interface';
import {AnalyzeDataService} from '../../modules/parser/analyzer-factory/analyze-data.service';
import {DataModelService} from '../../modules/parser/analyzer-factory/data-model.service';


@Injectable({
  providedIn: 'root'
})
export class WorkerService {
  private songFiles: Map<File, SongFileInfo> = new Map<File, SongFileInfo>();
  private songFileSubject: Subject<SongFileInfo> = new Subject();

  constructor(private uploadService: UploadService,
              private fileParserService: FileParserService,
              private analyzeDataService: AnalyzeDataService,
              private dataModelService: DataModelService) {
    uploadService.getUploadedFileObservable().subscribe((file) => this.getUploadedFile(file));
  }

  private getUploadedFile(file: File) {
    this.parseUploadedFiles(file);

    console.log('received new file: ', file);
  }

  public getFileInfo(file: File): SongFileInfo {
    return this.songFiles.get(file);
  }

  private parseUploadedFiles(file: File) {
    const observable = this.fileParserService.parse(file);

    observable.subscribe(parserResult => this.analyzeData(file, parserResult), error => {}, () => observable.subscribe());
  }

  private setFileInfo(file: File, songFileInfo: SongFileInfo) {

    this.songFiles.set(file, songFileInfo);

    this.songFileSubject.next(this.songFiles.get(file));
  }

  private async analyzeData(file: File, parserResult: ParserResult) {
      console.log('start analysis');

      const analyzeResult = await this.analyzeDataService.analyze(parserResult);

      console.log('analyze result: ', analyzeResult);

      this.setFileInfo(file, {
        competionNumber: parserResult.competitionNumber,
        numberOfTeams: analyzeResult.numberOfTeams,
        numberOfSongs: analyzeResult.numberOfSongs,
        items: analyzeResult.songFiles
    });
  }
}

