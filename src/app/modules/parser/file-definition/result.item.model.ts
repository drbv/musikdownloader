import {DownloadItem} from '../../../models/DownloadItem';

export class ResultItem {
  downloadItems: DownloadItem[];
  numberOfSongs: number;
  numberOfTeams: number;

  constructor() {
    this.downloadItems = [];
  }
}
