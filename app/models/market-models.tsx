export interface User {
  accessTokken: string;
  id?: number;
  name: string;
  email: string;
  password: string;
  cart: Product[];
  address: Address;
}

export interface Address {
  id?: number;
  address: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
}

export interface Order {
  id?: number;
  userId: number;
  cart: Product[];
  address: Address;
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
  currency: "€" | "$"
  images: string[];
  userId?: number | null;
};
export type Currency = "€" | "$"

export interface MarketState {
  products: Product[];
  product: Product | null;
  user: User;
  modalVisibility: boolean;
  notification: Notification;
  isDarkTheme: boolean;
  cart: Product[]
}

export type NotificationTypes = 'info' | 'warning' | 'delete';
export interface Notification {
  text: string;
  type: NotificationTypes;
}
