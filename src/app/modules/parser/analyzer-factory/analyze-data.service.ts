import {Injectable} from '@angular/core';
import {AnalyzeResult} from '../file-definition/analyze-result.interface';
import {DownloadItem} from '../../../models/DownloadItem';
import {ParserResult} from '../file-definition/parser-result.interface';
import {ResultItem} from '../file-definition/result.item.model';
import {AnalyzerFactoryService} from './analyzer-factory.service';
import {BaseAnalyzer} from './analyzers/base-analyzer.model';


@Injectable({
  providedIn: 'root'
})
export class AnalyzeDataService {


  constructor(private analyzerFactoryService: AnalyzerFactoryService) {
  }

  public async analyze(parserResult: ParserResult): Promise<AnalyzeResult> {

    const downloadItems: Array<DownloadItem> = [];
    let numberOfSongs = 0;
    let numberOfTeams = 0;

    for await (const item of parserResult.data) {

      const resultItem = await this.processItem(item);

      if (resultItem) {
        resultItem.downloadItems.forEach(downloadItem => downloadItems.push(downloadItem));
        numberOfSongs += resultItem.numberOfSongs;
        numberOfTeams += resultItem.numberOfTeams;
      }
    }

    return {
      numberOfSongs,
      numberOfTeams,
      songFiles: downloadItems
    };
  }

  private async processItem(item: any): Promise<ResultItem> {

    const analyzer: BaseAnalyzer = this.analyzerFactoryService.getAnalyzer(item.Quelle);

    if (analyzer) {
      return analyzer.analyzeItem(item);
    } else {
      return null;
    }
  }
}
