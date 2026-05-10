import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from 'vitest';

@Injectable({
  providedIn: 'root',
})
export class BulletService {
  private readonly http: HttpClient = inject(HttpClient);

  public getBullets() {
    return this.http.get('http://localhost:7071/getBullets')
  }
}
