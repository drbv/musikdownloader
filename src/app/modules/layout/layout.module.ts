import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FileInfoModule} from '../file-info/file-info.module';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [
    ContentComponent,
    FooterComponent],
  exports: [
    ContentComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FileInfoModule,
    HttpClientModule,
    FlexLayoutModule
  ]
})
export class LayoutModule { }
