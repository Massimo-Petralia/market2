import {User} from '../../models/market-models';
import {Product} from '../../models/market-models';

export type UserContextType = {
  user: User;
  onSignup: (user: User) => void;
  onSignin: (user: User) => void;
  addToUserCart: (
    product: Product,

    id: number,
    accessToken: string,
  ) => void;
};
