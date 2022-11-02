import { TestBed } from '@angular/core/testing';

import { AssetCreationService } from './asset-creation.service';

describe('AssetCreationService', () => {
  let service: AssetCreationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetCreationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
