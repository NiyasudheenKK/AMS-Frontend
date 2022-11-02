import { TestBed } from '@angular/core/testing';

import { PurchaceOrderService } from './purchace-order.service';

describe('PurchaceOrderService', () => {
  let service: PurchaceOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchaceOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
