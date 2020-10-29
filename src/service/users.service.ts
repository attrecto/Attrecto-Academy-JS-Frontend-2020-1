import request, {Methods} from "../util/request";
import {UserModel} from "../models/user.model";

export class UsersService {

  async getUsers() {
    return request<UserModel[]>({
      method: Methods.GET,
      resource: "users",
    });
  }
}
