import {User} from '../../models/market-models';

export type UserContextType = {
  user: User;
  onSignup: (user: User) => void
};
