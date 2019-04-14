import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {
  MatButtonModule,
  MatCardModule, MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule
} from '@angular/material';
import {FileInfoComponent} from './file-info.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomInfoDialogComponent} from '../custom-dialog/custom-info-dialog/custom-info-dialog.component';

@NgModule({
  declarations: [
    FileInfoComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule
  ],
  exports:
  [
    FileInfoComponent
  ],
  entryComponents: [
    CustomInfoDialogComponent
  ]
})
export class FileInfoModule { }
