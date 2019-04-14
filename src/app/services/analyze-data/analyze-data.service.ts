import { Injectable } from '@angular/core';
import {AnalyzeResult} from '../../modules/parser/file-definition/AnalyzeResult';
import {DownloadItem} from '../../models/DownloadItem';
import {DataModelService} from '../data-model/data-model.service';
import {DataModel} from '../../models/DataModel';

class ResultItem {
  downloadItems: DownloadItem[];
  numberOfSongs: number;
  numberOfTeams: number;

  constructor() {
    this.downloadItems = [];
  }
}

@Injectable({
  providedIn: 'root'
})
export class AnalyzeDataService {
  private currentModel: DataModel;

  constructor(private dataModelService: DataModelService) {
  }

  analyze(data: any): AnalyzeResult {
    console.log('analyzing data...', data);


    this.currentModel = this.dataModelService.dataModel;

    const downloadItems: Array<DownloadItem> = [];
    let numberOfSongs = 0;
    let numberOfTeams = 0;

    data.forEach(item => {

      const resultItem = this.processItem(item);

      if (resultItem) {
        resultItem.downloadItems.forEach(downloadItem => downloadItems.push(downloadItem));
        numberOfSongs += resultItem.numberOfSongs;
        numberOfTeams += resultItem.numberOfTeams;
      }

    });

    return {
      numberOfSongs,
      numberOfTeams,
      songFiles: downloadItems
    };
  }

  private processItem(item: any): ResultItem {

    console.log('item to analyze: ', item);

    if (!item[this.currentModel.folder]) {
      return null;
    }

    const filename = `${item[this.currentModel.folder]}_${item[this.currentModel.danceTeam.familyname_female]}_${item[this.currentModel.danceTeam.familyname_male]}_`;

    const resultItem = new ResultItem();
    resultItem.numberOfSongs = 0;

    this.parseItem(item, filename, resultItem, this.currentModel.music.footwork, 'ER_FT');
    this.parseItem(item, filename, resultItem, this.currentModel.music.acrobatic, 'ER_Akro');
    this.parseItem(item, filename, resultItem, this.currentModel.music.setup, 'Stellprobe');
    this.parseItem(item, filename, resultItem, this.currentModel.music.show, 'Tanzmusik');
    this.parseItem(item, filename, resultItem, this.currentModel.music.reserve, 'Ersatzmusik');

    resultItem.numberOfTeams = 1;

    console.log('result: ', resultItem);
    return resultItem;
  }

  private parseItem(item: any, filename: string, resultItem, type: string, folder: string) {
    if (item[type] !== '') {

      const downloadItem = new DownloadItem();
      const fileId = item[type].split('=', 2)[1];

      downloadItem.filename = filename + fileId;
      downloadItem.foldername = `/${item[this.currentModel.folder]}${folder}/`;
      downloadItem.url = item[type];

      resultItem.downloadItems.push(downloadItem);
      resultItem.numberOfSongs += 1;

      return resultItem;
    }
  }
}
