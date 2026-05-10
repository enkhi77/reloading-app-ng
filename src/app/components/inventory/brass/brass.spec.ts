import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Brass } from './brass';

describe('Brass', () => {
  let component: Brass;
  let fixture: ComponentFixture<Brass>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Brass],
    }).compileComponents();

    fixture = TestBed.createComponent(Brass);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
