import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultConfirmDialogComponent } from './default-confirm-dialog.component';

describe('DefaultConfirmDialogComponent', () => {
  let component: DefaultConfirmDialogComponent;
  let fixture: ComponentFixture<DefaultConfirmDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultConfirmDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
