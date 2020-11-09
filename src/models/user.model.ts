export interface UserBadgeModel {
  id: number;
}

export interface UserModel {
  name: string;
  id: number;
  createdAt: Date;
  image: string;
  badges: UserBadgeModel[];
}
