import {User} from './market-models';
import {Product} from './market-models';
export const DefaultUser: User = {
  accessTokken: '',
  id: undefined,
  name: '',
  email: '',
  password: '',
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
