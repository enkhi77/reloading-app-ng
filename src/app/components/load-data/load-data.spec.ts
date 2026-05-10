import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadData } from './load-data';

describe('LoadData', () => {
  let component: LoadData;
  let fixture: ComponentFixture<LoadData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadData],
    }).compileComponents();

    fixture = TestBed.createComponent(LoadData);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
