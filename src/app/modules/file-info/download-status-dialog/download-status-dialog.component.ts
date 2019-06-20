import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DownloadStatusData} from './download-status-data.model';
import {Subject, Subscription} from 'rxjs';

@Component({
  selector: 'app-download-status-dialog',
  templateUrl: './download-status-dialog.component.html'
})
export class DownloadStatusDialogComponent implements OnInit, OnDestroy {

  public counter = 0;
  public total = 0;
  public isComplete = false;
  public fileName = '';

  private counterSubscription: Subscription;

  constructor(public dialogRef: MatDialogRef<DownloadStatusDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DownloadStatusData) {
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
        this.handleCompleted();
      }
    });
  }

  ngOnDestroy(): void {
  }

  private handleCompleted() {
    this.isComplete = true;
    this.dialogRef.close();
  }
}
