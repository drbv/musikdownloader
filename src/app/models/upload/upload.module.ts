import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule} from '@angular/material';
import {UploadComponent} from './upload.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    UploadComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatIconModule
  ],
  exports:
  [
    UploadComponent
  ]
})
export class UploadModule { }
