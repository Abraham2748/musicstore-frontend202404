export interface LoginApiResponse {
  data: {
    token: string;
    expirationDate: string;
  };
  success: boolean;
  errorMessage: string;
}

export interface RegisterRequestBody {
  documentNumber: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  documentType: string;
  age: number;
  confirmPassword: string;
}
export interface ResetPasswordRequestBody {
  email: string;
  token: string;
  newPassword: string;
  confirmNewPassword: string;
}
export interface ResetPasswordApiResponse {
  success: boolean;
  errorMessage: string;
}
