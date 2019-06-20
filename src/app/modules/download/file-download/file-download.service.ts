import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DownloadItem} from '../../../models/DownloadItem';
import * as JSZip from 'jszip';
import {Observable, Subject} from 'rxjs';
import {saveFile} from './file-download';

@Injectable({
  providedIn: 'root'
})
export class FileDownloadService {

  constructor(private httpClient: HttpClient) { }

  public downloadFiles(downloadItems: DownloadItem[], fileName: string): Observable<any> {
    const zip = new JSZip();
    const notificationSubject = new Subject();

    this.downloadFilesAsync(downloadItems, zip, fileName, notificationSubject);

    return notificationSubject.asObservable();
  }

  private async downloadFilesAsync(downloadItems: DownloadItem[], zip, fileName: string, subject: Subject<any>) {
    for (const [index, downloadItem] of downloadItems.entries()) {
      await this.httpClient.get(downloadItem.url, {
        responseType: 'blob'
      }).toPromise().then(data => {
        zip.file(downloadItem.foldername + '/' + downloadItem.filename, data);
        subject.next(index + 1);
      });
    }

    zip.generateAsync({type: 'blob'})
      .then(content => {
        const zipFileName = fileName.split('.').slice(0, -1).join('.') + '.zip';
        saveFile(content, zipFileName);
      });
  }
}

