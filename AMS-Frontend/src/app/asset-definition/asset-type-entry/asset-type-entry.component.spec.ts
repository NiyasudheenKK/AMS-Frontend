import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetTypeEntryComponent } from './asset-type-entry.component';

describe('AssetTypeEntryComponent', () => {
  let component: AssetTypeEntryComponent;
  let fixture: ComponentFixture<AssetTypeEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetTypeEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetTypeEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
