import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DownloadStatusData} from './download-status-data.model';
import {FileDownloadService} from '../../download/file-download/file-download.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-download-status-dialog',
  templateUrl: './download-status-dialog.component.html'
})
export class DownloadStatusDialogComponent implements OnInit, OnDestroy {

  public counter = 0;
  public total = 0;
  private downloadComplete = false;
  public fileName = '';

  private counterSubscription: Subscription;
  private zipFileGeneratedSubscription: Subscription;

  constructor(public dialogRef: MatDialogRef<DownloadStatusDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DownloadStatusData,
              private fileDownloadService: FileDownloadService) {
    if (!data.numberOfDownloads) {
      data.numberOfDownloads = 0;
    }
  }

  ngOnInit() {
    this.total = this.data.numberOfDownloads;
    this.fileName = this.data.songFileName;

    this.counterSubscription = this.data.counterSubject.subscribe(value => {
      this.counter = value;
      if (value === this.data.numberOfDownloads) {
        this.downloadCompleted();
      }
    });

    this.zipFileGeneratedSubscription = this.fileDownloadService.getZipFileGeneratedObservable().subscribe(() => this.zipFileCompleted());
  }

  ngOnDestroy(): void {
    this.counterSubscription.unsubscribe();
    this.zipFileGeneratedSubscription.unsubscribe();
  }

  public showProgressDownload() {
    return !this.downloadComplete;
  }

  public showProgressZipGeneration() {
    return this.downloadComplete;
  }

  private downloadCompleted() {
    this.downloadComplete = true;
  }

  private zipFileCompleted() {
    this.dialogRef.close();
  }
}
