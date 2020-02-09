import {Component, Inject, OnInit} from '@angular/core';
import {DialogInfoData} from '../models/dialog-info-data.model';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

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
