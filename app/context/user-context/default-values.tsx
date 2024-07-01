import {DefaultAddress, DefaultUser} from '../../models/default-values';

export const DefaultUserContext = {
  user: DefaultUser,
  userAddress: DefaultAddress,
  onSignup: () => {},
  onSignin: () => {},
  addToUserCart: () => {},
  setUser: () => {},
  setUserAddress: () => {},
  onAddAddress: () => {}
}
