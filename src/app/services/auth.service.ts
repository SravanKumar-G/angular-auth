import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  setToken(token: any) {
    localStorage.setItem('accessToken', token);
  }

  login({ email, password }: any): Observable<any> {
    if (email === 'test@gmail.com' && password === 'test123') {
      this.setToken('sdjfjoieyruwrjndsfoiuhyiwerb');
      return of({ email: 'test@gmail.com', password: '1234' });
    }
    return throwError(() => new Error('test'));
  }
}
