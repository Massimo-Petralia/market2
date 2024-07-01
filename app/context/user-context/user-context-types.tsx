import {User} from '../../models/market-models';
import {Product, Address} from '../../models/market-models';

export type UserContextType = {
  user: User;
  onSignup: (user: User) => void;
  onSignin: (user: User) => void;
  addToUserCart: (
    product: Product,

    id: number,
    accessToken: string,
  ) => void;
  setUser: React.Dispatch<React.SetStateAction<User>>
};
