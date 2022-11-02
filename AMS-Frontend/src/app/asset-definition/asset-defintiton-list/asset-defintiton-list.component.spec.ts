import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetDefintitonListComponent } from './asset-defintiton-list.component';

describe('AssetDefintitonListComponent', () => {
  let component: AssetDefintitonListComponent;
  let fixture: ComponentFixture<AssetDefintitonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetDefintitonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetDefintitonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
