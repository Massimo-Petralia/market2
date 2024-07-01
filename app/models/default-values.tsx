import {Address, User} from './market-models';
import {Product} from './market-models';

export const DefaultAddress : Address = {
  address: '',
  city: '',
  state: '',
  country: '',
  zipcode: ''
}

export const DefaultUser: User = {
  accessTokken: '',
  id: undefined,
  name: '',
  email: '',
  password: '',
  address:DefaultAddress,
  cart: [],
};

export const DefaultProduct: Product = {
  id: undefined,
  name: '',
  description: '',
  price: '',
  currency: '€',
  images: [],
  userId: null,
};

