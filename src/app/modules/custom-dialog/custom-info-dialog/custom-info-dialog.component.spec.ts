import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomInfoDialogComponent } from './custom-info-dialog.component';

describe('CustomInfoDialogComponent', () => {
  let component: CustomInfoDialogComponent;
  let fixture: ComponentFixture<CustomInfoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomInfoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
