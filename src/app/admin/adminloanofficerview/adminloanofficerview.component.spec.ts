import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminloanofficerviewComponent } from './adminloanofficerview.component';

describe('AdminloanofficerviewComponent', () => {
  let component: AdminloanofficerviewComponent;
  let fixture: ComponentFixture<AdminloanofficerviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminloanofficerviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminloanofficerviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
