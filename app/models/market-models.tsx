export interface User {
    accessTokken: string;
    id?: number;
    name: string;
    email: string;
    password: string;
    cart: Product[]
}


export type UserDataResponse = {
    accessToken: string;
    user: User
}|null



export type Product = {
    id?: number;
    name: string;
    description: string;
    price: string;
    images: string[];
    userId?: number| null
}

export interface MarketState {
    products: Product[];
    product: Product;
    user: User;
    notification: string;
    isDarkTheme:boolean;
}

