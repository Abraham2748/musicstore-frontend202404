import { Sale } from '../../shared/models/sale.model';

export interface SalesApiResponse {
  data: Sale[];
  success: boolean;
  errorMessage: string;
}

export interface FormattedDataModel {
  client: string;
  event: string;
  tickets: number;
  total: number;
  eventDate: string;
  saleDate: string;
  genre: string;
}
