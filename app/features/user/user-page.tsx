import {UserNavigator} from '../../navigation/user-navigation';
import {UserContextProvider} from '../../context/user-context/user-context-provider';

export const UserPage = () => {


  return (
    <UserContextProvider>
      <UserNavigator />
    </UserContextProvider>
  );
};
