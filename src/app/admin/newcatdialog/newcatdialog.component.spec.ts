import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcatdialogComponent } from './newcatdialog.component';

describe('NewcatdialogComponent', () => {
  let component: NewcatdialogComponent;
  let fixture: ComponentFixture<NewcatdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewcatdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcatdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
