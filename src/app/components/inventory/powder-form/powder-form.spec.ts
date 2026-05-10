import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowderForm } from './powder-form';

describe('PowderForm', () => {
  let component: PowderForm;
  let fixture: ComponentFixture<PowderForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PowderForm],
    }).compileComponents();

    fixture = TestBed.createComponent(PowderForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
