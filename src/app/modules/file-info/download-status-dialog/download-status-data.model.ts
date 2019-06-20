import {Subject} from 'rxjs';

export class DownloadStatusData {
  counterSubject: Subject<number>;
  numberOfDownloads: number;
  songFileName: string;
}
