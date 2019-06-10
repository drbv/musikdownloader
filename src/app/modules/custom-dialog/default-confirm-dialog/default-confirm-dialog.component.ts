import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {ConfirmDialogData} from '../models/confirm-dialog-data.model';

@Component({
  selector: 'app-default-confirm-dialog',
  templateUrl: './default-confirm-dialog.component.html',
  styles: []
})
export class DefaultConfirmDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData) {
    data.okText = data.okText ? data.okText : 'OK';
    data.cancelText = data.cancelText ? data.cancelText : 'Abbrechen';
    data.okButtonColor = data.okButtonColor ? data.okButtonColor : 'primary';
    data.cancelButtonColor = data.cancelButtonColor ? data.cancelButtonColor : 'warn';
    data.okIcon = data.okIcon ? data.okIcon : 'save';
    data.cancelIcon = data.cancelIcon ? data.cancelIcon : 'close';
    data.disableOkColor = data.disableOkColor ? data.disableOkColor : false;
    data.disableCancelColor = data.disableCancelColor ? data.disableCancelColor : false;
  }

  ngOnInit() {
    console.log('got data: ', this.data);
  }

}
