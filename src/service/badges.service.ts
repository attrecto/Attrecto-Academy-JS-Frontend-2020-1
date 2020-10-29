import request, { Methods } from "../util/request";
import { BadgeModel } from "../models/badge.model";

export class BadgesService {
  async getBadges() {
    return request<BadgeModel[]>({
      method: Methods.GET,
      resource: "badges",
    });
  }

  async getBadge(id: string) {
    return request<BadgeModel>({
      method: Methods.GET,
      resource: `badges/${id}`,
    });
  }
}
