import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DownloadItem} from '../../../models/DownloadItem';
import * as JSZip from 'jszip';
import {Observable, Subject} from 'rxjs';
import {saveFile} from './file-download';

@Injectable({
  providedIn: 'root'
})
export class FileDownloadService {
  private zipFileGeneratedEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor(private httpClient: HttpClient) { }

  public getZipFileGeneratedObservable(): EventEmitter<void> {
    return this.zipFileGeneratedEvent;
  }

  public async downloadFiles(downloadItems: DownloadItem[], fileName: string, notificationSubject: Subject<number>) {
    const zip = new JSZip();

    await this.downloadFilesAsync(downloadItems, zip, fileName, notificationSubject);
  }

  private async downloadFilesAsync(downloadItems: DownloadItem[], zip, fileName: string, subject: Subject<number>) {
    for (const [index, downloadItem] of downloadItems.entries()) {
      await this.httpClient.get(downloadItem.url, {
        responseType: 'blob'
      }).toPromise().then(data => {
        zip.file(downloadItem.foldername + downloadItem.filename, data);
        subject.next(index + 1);
      });
    }

    zip.generateAsync({type: 'blob'})
      .then(content => {
        this.zipFileGeneratedEvent.emit();
        const zipFileName = fileName.split('.').slice(0, -1).join('.') + '.zip';
        saveFile(content, zipFileName);
      });
  }
}

