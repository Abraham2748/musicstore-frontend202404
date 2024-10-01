import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {
  LoginApiResponse,
  RegisterRequestBody,
  ResetPasswordApiResponse,
  ResetPasswordRequestBody,
} from '../models/auth.model';
import { catchError, EMPTY, Observable, of } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.baseUrl;
  private http = inject(HttpClient);

  email = signal('');
  name = signal('');
  role = signal('');
  isLoggedIn = signal(false);

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

  register(body: RegisterRequestBody) {
    return this.http
      .post<LoginApiResponse>(this.baseUrl + 'users/register', body)
      .pipe(
        catchError((error) => {
          alert(error.error.errorMessage);
          return EMPTY;
        })
      );
  }

  sendToken(email: string) {
    return this.http
      .post<LoginApiResponse>(
        this.baseUrl + 'users/RequestTokenToResetPassword',
        {
          email,
        }
      )
      .pipe(
        catchError((error) => {
          alert(error.error.errorMessage);
          return EMPTY;
        })
      );
  }

  verifyToken() {
    const token = localStorage.getItem('token');
    if (!token) return;

    const jwtDecoded: any = jwtDecode(token);
    const email: string =
      jwtDecoded[
        'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'
      ];
    const name: string =
      jwtDecoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
    const role: string =
      jwtDecoded[
        'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
      ];
    this.email.set(email);
    this.name.set(name);
    this.role.set(role);
    this.isLoggedIn.set(true);
  }

  logout() {
    localStorage.clear();
    this.email.set('');
    this.name.set('');
    this.role.set('');
    this.isLoggedIn.set(false);
    alert('Cierre de sesión correcto');
  }

  resetPassword(body: ResetPasswordRequestBody) {
    return this.http
      .post<ResetPasswordApiResponse>(
        this.baseUrl + 'users/ResetPassword',
        body
      )
      .pipe(
        catchError((error) => {
          alert(error.error.errorMessage);
          return EMPTY;
        })
      );
  }
}
