import { ApiResponse } from "../../types/response.type";

export interface AuthData extends ApiResponse {
  data: {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
    created_at: string;
    updated_at: string;
    token: string;
  };
}

export interface AuthLoginVariables {
  email: string;
  password: string;
}
