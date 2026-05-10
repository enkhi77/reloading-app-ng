import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerForm } from './primer-form';

describe('PrimerForm', () => {
  let component: PrimerForm;
  let fixture: ComponentFixture<PrimerForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimerForm],
    }).compileComponents();

    fixture = TestBed.createComponent(PrimerForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
