import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressionChangerComponent } from './progression-changer.component';

describe('ProgressionChangerComponent', () => {
  let component: ProgressionChangerComponent;
  let fixture: ComponentFixture<ProgressionChangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressionChangerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressionChangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
