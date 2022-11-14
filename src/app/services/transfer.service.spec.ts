/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { TransferService } from './transfer.service';

describe('Service: Transferencia', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransferService],
    });
  });

  it('should ...', inject([TransferService], (service: TransferService) => {
    expect(service).toBeTruthy();
  }));
});
