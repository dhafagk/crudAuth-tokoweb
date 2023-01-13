import { AxiosResponse } from "axios";
import { ProductDataProps } from "../types/product.type";
import AdapterService from "./adapter.service";

export default class ProductService extends AdapterService {
  constructor() {
    super();
  }

  async getProducts(params = {}): Promise<AxiosResponse<ProductDataProps>> {
    try {
      return this.sendGetRequest("/product", params);
    } catch (error: any) {
      throw new Error("ProductService.getProducts: " + error?.message);
    }
  }

  async getProduct(id: string): Promise<AxiosResponse<ProductDataProps>> {
    try {
      return this.sendGetRequest("/product/show?product_id=" + id);
    } catch (error: any) {
      throw new Error("ProductService.detailProduct: " + error?.message);
    }
  }

  async createProduct(body = {}) {
    try {
      return this.sendPostRequest("/product/store", body);
    } catch (error: any) {
      throw new Error("ProductService.createProduct: " + error?.message);
    }
  }

  async editProduct(body = {}) {
    try {
      return this.sendPostRequest("/product/update", body);
    } catch (error: any) {
      throw new Error("ProductService.editProduct: " + error?.message);
    }
  }

  async deleteProduct(id: number) {
    try {
      return this.sendDeleteRequest("/product/" + id);
    } catch (error: any) {
      throw new Error("ProductService.deleteProduct: " + error?.message);
    }
  }
}
