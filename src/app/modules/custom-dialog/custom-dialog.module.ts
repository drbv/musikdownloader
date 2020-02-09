import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomInfoDialogComponent} from './custom-info-dialog/custom-info-dialog.component';
import {DefaultConfirmDialogComponent} from './default-confirm-dialog/default-confirm-dialog.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

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
