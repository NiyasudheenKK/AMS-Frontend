import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlistingComponent } from './adminlisting.component';

describe('AdminlistingComponent', () => {
  let component: AdminlistingComponent;
  let fixture: ComponentFixture<AdminlistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminlistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
