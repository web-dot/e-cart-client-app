import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletecatdialogComponent } from './deletecatdialog.component';

describe('DeletecatdialogComponent', () => {
  let component: DeletecatdialogComponent;
  let fixture: ComponentFixture<DeletecatdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletecatdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletecatdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
