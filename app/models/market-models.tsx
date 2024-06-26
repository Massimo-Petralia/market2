export interface User {
  accessTokken: string;
  id?: number;
  name: string;
  email: string;
  password: string;
  cart: Product[];
}

export type UserDataResponse = {
  accessToken: string;
  user: User;
} | null;

export type Product = {
  id?: number;
  name: string;
  description: string;
  price: string;
  images: string[];
  userId?: number | null;
};

export interface MarketState {
  products: Product[];
  product: Product | null;
  user: User;
  modalVisibility: boolean;
  notification: Notification;
  isDarkTheme: boolean;
}

export type NotificationTypes = 'info' | 'warning' | 'delete';
export interface Notification {
  text: string;
  type: NotificationTypes;
}
