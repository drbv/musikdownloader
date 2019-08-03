import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule, MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatProgressBarModule, MatProgressSpinnerModule
} from '@angular/material';
import {FileInfoComponent} from './file-info.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CustomDialogModule} from '../custom-dialog/custom-dialog.module';
import {CommonModule} from '@angular/common';
import {DownloadStatusDialogComponent} from './download-status-dialog/download-status-dialog.component';
import { DisclaimerDialogComponent } from './disclaimer-dialog/disclaimer-dialog.component';

@NgModule({
  declarations: [
    FileInfoComponent,
    DownloadStatusDialogComponent,
    DisclaimerDialogComponent
  ],
  imports: [
    CommonModule,
    CustomDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FlexLayoutModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
  ],
  exports:
  [
    FileInfoComponent
  ],
  entryComponents: [
    DownloadStatusDialogComponent,
    DisclaimerDialogComponent
  ]
})
export class FileInfoModule { }
