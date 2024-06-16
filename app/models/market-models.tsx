export interface User {
    id?: number;
    name: string;
    email: string;
    password: string
}

export type UserData = {
    accessToken?: string;
    user: User
}|null

export type Product = {
    id?: number;
    name: string;
    description: string;
    price: string;
    images: string[];
    userId: number
}|null

export interface MarketState {
    products: Product[];
    product: Product;
    userData: UserData;
    notification: string
}

