import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoginApiResponse } from '../models/auth.model';
import { catchError, EMPTY, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = environment.baseUrl;
  http = inject(HttpClient);

  login(email: string, password: string) {
    return this.http
      .post<LoginApiResponse>(this.baseUrl + 'users/login', {
        username: email,
        password,
      })
      .pipe(
        catchError((error) => {
          alert(error.error.errorMessage);
          return EMPTY;
        })
      );
  }
}
