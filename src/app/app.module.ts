import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FileInfoModule} from './modules/file-info/file-info.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CustomInfoDialogComponent } from './modules/custom-dialog/custom-info-dialog/custom-info-dialog.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CustomInfoDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FileInfoModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
