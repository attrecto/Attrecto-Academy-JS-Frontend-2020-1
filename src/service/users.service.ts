import request, { Methods } from "../util/request";
import { UserModel } from "../models/user.model";

export class UsersService {
  async getUsers() {
    return request<UserModel[]>({
      method: Methods.GET,
      resource: "users",
    });
  }

  async getUser(id: string) {
    return request<UserModel>({
      method: Methods.GET,
      resource: `users/${id}`,
    });
  }

  async updateUser(id: string, user: UserModel) {
    return request<UserModel>({
      method: Methods.PATCH,
      resource: `users/${id}`,
      data: user,
    });
  }

  async createUser(user: UserModel) {
    return request<UserModel>({
      method: Methods.POST,
      resource: `users`,
      data: user,
    });
  }

  async deleteUser(id: string) {
    return request<UserModel>({
      method: Methods.DELETE,
      resource: `users/${id}`,
    });
  }
}
