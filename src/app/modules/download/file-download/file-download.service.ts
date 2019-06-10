import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DownloadItem} from '../../../models/DownloadItem';
import {saveFile} from './file-download';

@Injectable({
  providedIn: 'root'
})
export class FileDownloadService {

  constructor(private httpClient: HttpClient) { }

  public downloadFile(downloadItem: DownloadItem) {
    this.httpClient.get(downloadItem.url, {
      responseType: 'blob'
    }).toPromise().then(data => {
      console.log('save to: ', downloadItem.foldername + '/' + downloadItem.filename);
      saveFile(data, downloadItem.foldername + '/' + downloadItem.filename);
    });
  }
}
