import {NgModule} from '@angular/core';
import {FileInfoComponent} from './file-info.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CustomDialogModule} from '../custom-dialog/custom-dialog.module';
import {CommonModule} from '@angular/common';
import {DownloadStatusDialogComponent} from './download-status-dialog/download-status-dialog.component';
import { DisclaimerDialogComponent } from './disclaimer-dialog/disclaimer-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';

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
