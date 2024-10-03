import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {
  BuyTicketsApiResponse,
  GetConcertByIdApiResponse,
} from '../models/concert.model';
import { catchError, EMPTY } from 'rxjs';
import { SaleApiResponse } from '../models/sale.model';
import { NotificationsService } from 'angular2-notifications';

@Injectable({
  providedIn: 'root',
})
export class ConcertsService {
  private http = inject(HttpClient);
  private baseUrl = environment.baseUrl;
  notifications = inject(NotificationsService);

  getConcertById(id: string) {
    return this.http
      .get<GetConcertByIdApiResponse>(this.baseUrl + 'concerts/' + id)
      .pipe(
        catchError((error) => {
          this.notifications.error('Error', error.error.errorMessage);
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
          this.notifications.error('Error', error.error.errorMessage);
          return EMPTY;
        })
      );
  }

  getSale(saleId: number) {
    return this.http
      .get<SaleApiResponse>(this.baseUrl + 'sales/?id=' + saleId)
      .pipe(
        catchError((error) => {
          this.notifications.error('Error', error.error.errorMessage);
          return EMPTY;
        })
      );
  }
}
