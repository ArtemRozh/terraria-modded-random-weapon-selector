import { TestBed } from '@angular/core/testing';

import { WeaponDataService } from './weapon-data.service';

describe('WeaponDataService', () => {
  let service: WeaponDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeaponDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
