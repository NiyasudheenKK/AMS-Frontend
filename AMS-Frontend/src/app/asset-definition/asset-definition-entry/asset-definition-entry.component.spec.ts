import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetDefinitionEntryComponent } from './asset-definition-entry.component';

describe('AssetDefinitionEntryComponent', () => {
  let component: AssetDefinitionEntryComponent;
  let fixture: ComponentFixture<AssetDefinitionEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetDefinitionEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetDefinitionEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
