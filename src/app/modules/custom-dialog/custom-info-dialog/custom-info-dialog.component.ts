import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogInfoData} from './DialogInfoData';

@Component({
  selector: 'app-custom-info-dialog',
  templateUrl: './custom-info-dialog.component.html',
  styles: []
})
export class CustomInfoDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CustomInfoDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogInfoData) { }

  ngOnInit()
  {
  }

  onClickOk(): void
  {
    this.dialogRef.close();
  }

}
