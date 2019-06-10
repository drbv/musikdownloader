import {NgModule} from '@angular/core';
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
import {FlexLayoutModule} from '@angular/flex-layout';
import {CustomDialogModule} from '../custom-dialog/custom-dialog.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    FileInfoComponent
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
    MatDialogModule
  ],
  exports:
  [
    FileInfoComponent
  ]
})
export class FileInfoModule { }
