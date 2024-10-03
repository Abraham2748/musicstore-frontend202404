export interface Sale {
  saleId: number;
  dateEvent: string;
  timeEvent: string;
  genre: string;
  imageUrl: string;
  title: string;
  operationNumber: string;
  fullName: string;
  quantity: number;
  saleDate: string;
  total: number;
}

export interface SaleApiResponse {
  data: Sale;
  success: boolean;
  errorMessage: string;
}
