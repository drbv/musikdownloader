import {BaseAnalyzer} from './base-analyzer.model';
import {ResultItem} from '../../file-definition/result.item.model';
import {DownloadItem} from '../../../../models/DownloadItem';

export class RrDataAnalyzer extends BaseAnalyzer {

  protected onAnalyzeItem(item: any): ResultItem {

    if (!item[this.currentModel.folder]) {
      return null;
    }

    const filename = `${item[this.currentModel.databaseMusic.name]}_${item[this.currentModel.databaseMusic.title]}_${item[this.currentModel.databaseMusic.speed]}.mp3`;

    const resultItem = new ResultItem();
    resultItem.numberOfSongs = 1;

    const downloadItem = new DownloadItem();
    downloadItem.filename = filename;
    downloadItem.foldername = item[this.currentModel.folder];
    downloadItem.url = item[this.currentModel.databaseMusic.url];

    resultItem.downloadItems.push(downloadItem);

    console.log('result: ', resultItem);
    console.log('item: ', item);

    return resultItem;
  }
}
