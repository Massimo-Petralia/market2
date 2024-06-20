import {User} from '../../models/market-models';
import {UserNavigator} from '../../navigation/user-navigation';

export const UserPage = () => {
  const onSignup = (user: User) => {};

  const onSignin = () => {};

  return <UserNavigator />;
};
