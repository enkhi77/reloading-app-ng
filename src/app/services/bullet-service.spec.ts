import { TestBed } from '@angular/core/testing';

import { BulletService } from './bullet-service';

describe('BulletService', () => {
  let service: BulletService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BulletService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
