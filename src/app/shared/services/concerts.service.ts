import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {
  BuyTicketsApiResponse,
  GetConcertByIdApiResponse,
} from '../models/concert.model';
import { catchError, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConcertsService {
  private http = inject(HttpClient);
  private baseUrl = environment.baseUrl;

  getConcertById(id: string) {
    return this.http
      .get<GetConcertByIdApiResponse>(this.baseUrl + 'concerts/' + id)
      .pipe(
        catchError((error) => {
          alert(error.error.errorMessage);
          return EMPTY;
        })
      );
  }

  buyTickets(eventId: number, quantity: number) {
    return this.http
      .post<BuyTicketsApiResponse>(this.baseUrl + 'sales', {
        concertId: eventId,
        ticketsQuantity: quantity,
      })
      .pipe(
        catchError((error) => {
          alert(error.error.errorMessage);
          return EMPTY;
        })
      );
  }
}
