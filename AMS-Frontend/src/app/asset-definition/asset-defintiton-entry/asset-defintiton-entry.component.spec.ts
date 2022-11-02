import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetDefintitonEntryComponent } from './asset-defintiton-entry.component';

describe('AssetDefintitonEntryComponent', () => {
  let component: AssetDefintitonEntryComponent;
  let fixture: ComponentFixture<AssetDefintitonEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetDefintitonEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetDefintitonEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
