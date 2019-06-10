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
    console.log('analyzing data...', parserResult.data);

    const downloadItems: Array<DownloadItem> = [];
    let numberOfSongs = 0;
    let numberOfTeams = 0;

    for await (const item of parserResult.data) {

      console.log('analyze this item: ', item);

      const resultItem = await this.processItem(item);

      if (resultItem) {
        resultItem.downloadItems.forEach(downloadItem => downloadItems.push(downloadItem));
        numberOfSongs += resultItem.numberOfSongs;
        numberOfTeams += resultItem.numberOfTeams;
      }

      console.log('in foreach: ', numberOfSongs, numberOfTeams);
    }

    console.log('sums: ', numberOfTeams, numberOfSongs);

    return {
      numberOfSongs,
      numberOfTeams,
      songFiles: downloadItems
    };
  }

  private async processItem(item: any): Promise<ResultItem> {

    console.log('process item to analyze: ', item, item.Quelle);

    const analyzer: BaseAnalyzer = this.analyzerFactoryService.getAnalyzer(item.Quelle);

    if (analyzer) {
      return analyzer.analyzeItem(item);
    } else {
      return null;
    }
  }
}
