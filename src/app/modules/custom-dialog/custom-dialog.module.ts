import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatDialogModule, MatIconModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomInfoDialogComponent} from './custom-info-dialog/custom-info-dialog.component';
import {DefaultConfirmDialogComponent} from './default-confirm-dialog/default-confirm-dialog.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    CustomInfoDialogComponent,
    DefaultConfirmDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  entryComponents: [
    CustomInfoDialogComponent,
    DefaultConfirmDialogComponent
  ]
})
export class CustomDialogModule { }
