import {DefaultUser} from '../../models/default-values';

export const DefaultUserContext = {
  user: DefaultUser,
  onSignup: () => {},
  onSignin: () => {},
  addToUserCart: () => {},
  setUser: () => {}
}
