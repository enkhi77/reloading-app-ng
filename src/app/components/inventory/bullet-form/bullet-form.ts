import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatOption, MatSelect } from '@angular/material/select';
import { SimpleIdObject } from '../../../interfaces/lists';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-bullet-form',
  imports: [ReactiveFormsModule, MatSelect, MatOption, MatFormField, MatInput, MatButton],
  templateUrl: './bullet-form.html',
  styleUrl: './bullet-form.css',
})
export class BulletForm {
  public bulletForm: FormGroup;
  public manufacturers: SimpleIdObject[];

  constructor(private readonly formBuilder: FormBuilder) {
    this.manufacturers = [
      { id: 1, name: 'Hornady' },
      { id: 2, name: 'Berrys Bullets' },
      { id: 3, name: 'Blue Bullets' },
    ];

    this.bulletForm = formBuilder.group({
      manufacturerId: [null, [Validators.required]],
      diameter: [null, [Validators.required]],
      quantity: [null, [Validators.required]],
    });
  }

  protected onSubmit() {
    console.log('submit bullet form', this.bulletForm.value);
  }
}
