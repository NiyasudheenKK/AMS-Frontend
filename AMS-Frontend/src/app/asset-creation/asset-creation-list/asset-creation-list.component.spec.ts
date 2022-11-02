import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetCreationListComponent } from './asset-creation-list.component';

describe('AssetCreationListComponent', () => {
  let component: AssetCreationListComponent;
  let fixture: ComponentFixture<AssetCreationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetCreationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetCreationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
