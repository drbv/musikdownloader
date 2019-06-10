import {DownloadItem} from '../../../models/DownloadItem';

export interface AnalyzeResult
{
  numberOfTeams: number;
  numberOfSongs: number;
  songFiles: DownloadItem[];
}
