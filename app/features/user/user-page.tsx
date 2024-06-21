import {User} from '../../models/market-models';
import {UserNavigator} from '../../navigation/user-navigation';
import {UserContextProvider} from '../../context/user-context/user-context-provider';

export const UserPage = () => {
  const onSignup = (user: User) => {};

  const onSignin = () => {};

  return (
    <UserContextProvider>
      <UserNavigator />
    </UserContextProvider>
  );
};
//user context and user services