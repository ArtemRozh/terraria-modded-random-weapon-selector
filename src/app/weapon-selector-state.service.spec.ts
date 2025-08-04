import { TestBed } from '@angular/core/testing';

import { WeaponSelectorStateService } from './weapon-selector-state.service';

describe('WeaponSelectorStateService', () => {
  let service: WeaponSelectorStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeaponSelectorStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
