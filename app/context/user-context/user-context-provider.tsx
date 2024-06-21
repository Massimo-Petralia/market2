import React, {createContext, useState} from 'react';
import {User, UserDataResponse} from '../../models/market-models';
import {DefaultUser} from '../../models/default-values';
import {UserContextType} from './user-context-types';
import {DefaultUserContext} from './default-values';
import {UserServices} from '../../services/user-services';
const UserContext = createContext<UserContextType>(DefaultUserContext);
const UserContextProvider = ({children}: {children: React.ReactNode}) => {
  const userServices = new UserServices();
  const [user, setUser] = useState<User>(DefaultUser);

  const onSignup = (user: User) => {
    userServices.createUser(user).then(async response => {
      const userDataResponse: UserDataResponse = await response.json();
      if (userDataResponse) {
        const {accessToken, user} = userDataResponse;
        const userData: User = {
          accessTokken: accessToken,
          name: user.name,
          email: user.email,
          password: user.password,
        };
        setUser(userData);
      }
    }).catch(error => console.error('post request failed: ', error));
  };

  const onSignin = () => {};

  return <UserContext.Provider value={{user, onSignup}}>{children}</UserContext.Provider>;
};

export {UserContext, UserContextProvider};
