import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponConfigComponent } from './weapon-config.component';

describe('WeaponConfigComponent', () => {
  let component: WeaponConfigComponent;
  let fixture: ComponentFixture<WeaponConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeaponConfigComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeaponConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
