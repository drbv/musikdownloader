import {Component, OnInit} from '@angular/core';
import {DisclaimerDialogComponent} from '../../file-info/disclaimer-dialog/disclaimer-dialog.component';
import {Constants} from '../../custom-dialog/models/constants.model';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styles: []
})
export class ContentComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
    this.dialog.open(DisclaimerDialogComponent, {
        width: Constants.DIALOG_WIDTH_DEFAULT,
        panelClass: 'custom-dialog-container',
        disableClose: true
      });
  }

}
