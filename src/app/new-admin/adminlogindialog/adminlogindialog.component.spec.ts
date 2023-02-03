import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminloginDialogComponent } from './adminlogindialog.component';

describe('AdminloginComponent', () => {
  let component: AdminloginDialogComponent;
  let fixture: ComponentFixture<AdminloginDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminloginDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminloginDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
