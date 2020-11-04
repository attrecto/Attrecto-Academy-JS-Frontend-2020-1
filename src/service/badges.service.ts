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

  async updateBadge(id: string, badge: BadgeModel) {
    return request<BadgeModel>({
      method: Methods.PATCH,
      resource: `badges/${id}`,
      data: badge,
    });
  }

  async createBadge(badge: BadgeModel) {
    return request<BadgeModel>({
      method: Methods.POST,
      resource: `badges`,
      data: badge,
    });
  }

  async deleteBadge(id: string) {
    return request<BadgeModel>({
      method: Methods.DELETE,
      resource: `badges/${id}`,
    });
  }
}
