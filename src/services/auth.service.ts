import AdapterService from "./adapter.service";

export default class AuthService extends AdapterService {
  constructor() {
    super();
  }

  async login(email: string, password: string) {
    try {
      return this.sendPostRequest("/login", { email, password });
    } catch (error: any) {
      throw new Error("AuthService.login: " + error?.message);
    }
  }

  async logout() {
    try {
      return this.sendPostRequest("/logout");
    } catch (error: any) {
      throw new Error("AuthService.login: " + error?.message);
    }
  }
}
