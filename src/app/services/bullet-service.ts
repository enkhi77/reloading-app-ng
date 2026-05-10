import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bullet } from '../interfaces/inventory';

@Injectable({
  providedIn: 'root',
})
export class BulletService {
  private readonly http: HttpClient = inject(HttpClient);

  public getBullets(): Observable<any> {
    return this.http.get('http://localhost:5190/api/bullet');
  }

  public getBullet(id: string): Observable<any> {
    return this.http.get(`http://localhost:5190/api/bullet/${id}`);
  }

  public addBullet(bullet: Bullet) {
    return this.http.post(`http://localhost:5190/api/bullet`, bullet);
  }

  public editBullet(bullet: Bullet) {
    return this.http.put(`http://localhost:5190/api/bullet/${bullet.id}`, bullet);
  }

  public deleteBullet(bullet: Bullet) {
    return this.http.delete(`http://localhost:5190/api/bullet/${bullet.id}`);
  }
}
