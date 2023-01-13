import { ApiResponse } from "./response.type";

export interface ProductDataProps extends ApiResponse {
  data: {
    id: number;
    name: string;
    price: string;
    created_at: string;
    updated_at: string;
  };
}
