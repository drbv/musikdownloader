import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadStatusDialogComponent } from './download-status-dialog.component';

describe('DownloadStatusDialogComponent', () => {
  let component: DownloadStatusDialogComponent;
  let fixture: ComponentFixture<DownloadStatusDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadStatusDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadStatusDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
