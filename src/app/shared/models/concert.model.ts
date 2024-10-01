export interface Concert {
  id: number;
  title: string;
  extendedDescription: string;
  description: string;
  place: string;
  unitPrice: number;
  genre: string;
  genreId: number;
  dateEvent: string;
  timeEvent: string;
  imageUrl: string;
  ticketsQuantity: number;
  finalized: boolean;
  status: string;
}

export interface GetConcertByIdApiResponse {
  data: Concert;
  success: boolean;
  errorMessage: string;
}

export interface BuyTicketsApiResponse {
  data: number;
  success: boolean;
  errorMessage: string;
}
