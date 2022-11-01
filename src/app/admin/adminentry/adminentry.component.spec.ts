import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminentryComponent } from './adminentry.component';

describe('AdminentryComponent', () => {
  let component: AdminentryComponent;
  let fixture: ComponentFixture<AdminentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
