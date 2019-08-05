import {Component, OnDestroy, OnInit} from '@angular/core';
import {DisclaimerDialogComponent} from '../../file-info/disclaimer-dialog/disclaimer-dialog.component';
import {Constants} from '../../custom-dialog/models/constants.model';
import {MediaChange, MediaObserver} from '@angular/flex-layout';
import {Subscription} from 'rxjs';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styles: []
})
export class ContentComponent implements OnInit, OnDestroy {
  private watcher: Subscription;

  constructor(public dialog: MatDialog,
              private media: MediaObserver) {
  }

  ngOnInit() {
    this.watcher = this.media.asObservable().subscribe((change: MediaChange[]) => {
      const isMobileDevice = change[0].mqAlias === 'xs';
      this.dialog.open(DisclaimerDialogComponent, {
        width: isMobileDevice ? Constants.DIALOG_WIDTH_MOBILE : Constants.DIALOG_WIDTH_DEFAULT,
        height: isMobileDevice ? '100%' : 'auto',
        panelClass: isMobileDevice ? 'mobile-dialog-container' : 'custom-dialog-container',
        disableClose: true
      });
    });
  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }

}
