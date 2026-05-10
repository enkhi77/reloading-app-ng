import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Firearm } from './firearm';

describe('Firearm', () => {
  let component: Firearm;
  let fixture: ComponentFixture<Firearm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Firearm],
    }).compileComponents();

    fixture = TestBed.createComponent(Firearm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
