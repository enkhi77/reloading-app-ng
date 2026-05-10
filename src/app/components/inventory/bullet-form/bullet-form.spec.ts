import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletForm } from './bullet-form';

describe('BulletForm', () => {
  let component: BulletForm;
  let fixture: ComponentFixture<BulletForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BulletForm],
    }).compileComponents();

    fixture = TestBed.createComponent(BulletForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
