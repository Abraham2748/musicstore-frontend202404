import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { HomeApiResponse } from './home.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  baseUrl = environment.baseUrl;
  http = inject(HttpClient);

  getData() {
    return this.http.get<HomeApiResponse>(this.baseUrl + 'Home');
  }
}
