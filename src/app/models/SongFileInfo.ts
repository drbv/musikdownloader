import {DownloadItem} from './DownloadItem';

export interface SongFileInfo {
  competionNumber: number;
  numberOfSongs: number;
  numberOfTeams: number;
  items: Array<DownloadItem>;
}
