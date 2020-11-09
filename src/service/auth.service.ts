import request, { Methods } from "../util/request";
import { CredentialsModel } from "../models/credentials.model";

interface LoginResponse {
  token: string;
}

export class AuthService {
  async login(credentials: CredentialsModel) {
    return request<LoginResponse>({
      method: Methods.POST,
      resource: "login",
      data: credentials,
    });
  }
}
