import React, {createContext, useState} from 'react';
import {User} from '../../models/market-models';
import {DefaultUser} from '../../models/default-values';
import {UserContextType} from './user-context-types';
import {DefaultUserContext} from './default-values';
const UserContext = createContext<UserContextType>(DefaultUserContext);
const UserContextProvider = ({children}: {children: React.ReactNode}) => {
  const [user, setUser] = useState<User>(DefaultUser);

  return <UserContext.Provider value={{user}}
  >{children}</UserContext.Provider>;
};

export {UserContext, UserContextProvider};
