import React, {createContext, useState} from 'react';
import {User, UserDataResponse} from '../../models/market-models';
import {DefaultUser} from '../../models/default-values';
import {UserContextType} from './user-context-types';
import {DefaultUserContext} from './default-values';
import {UserServices} from '../../services/user-services';
import {
  ModalNotification,
  Notification,
} from '../../components/modal-notification';
const UserContext = createContext<UserContextType>(DefaultUserContext);
const UserContextProvider = ({children}: {children: React.ReactNode}) => {
  const [notification, setNotification] = useState<Notification>({
    type: 'info' || 'warning',
    text: '',
  });
  const userServices = new UserServices();
  const [user, setUser] = useState<User>(DefaultUser);
  const [visible, setVisible] = useState<boolean>(false);

  const toggleModal = () => {
    setVisible(!visible);
  };

  const onSignup = (user: User) => {
    userServices
      .createUser(user)
      .then(async response => {
        const userDataResponse: UserDataResponse = await response.json();
        if (userDataResponse) {
          const {accessToken, user} = userDataResponse;
          const userData: User = {
            accessTokken: accessToken,
            name: user.name,
            email: user.email,
            password: user.password,
            cart: []
          };
          setNotification({type: 'info', text: `Wellcome ${user.name} !`});
          toggleModal();
        }
      })
      .catch(error => console.error('post request failed: ', error));
  };

  const onSignin = (user: User) => {
    userServices
      .onSignin(user)
      .then(async response => {
        const userDataResponse: UserDataResponse = await response.json();
        if (userDataResponse) {
          const {accessToken, user} = userDataResponse;
          const userData: User = {
            id: user.id,
            accessTokken: accessToken,
            name: user.name,
            email: user.email,
            password: user.password,
            cart: []
          };
          setUser(userData);
        }
      })
      .catch(error => console.error('signin post request failed: ', error));
  };

  return (
    <>
      <UserContext.Provider value={{user, onSignup, onSignin}}>
        {children}
      </UserContext.Provider>
      <ModalNotification
        visible={visible}
        notification={notification}
        toggleModal={toggleModal}
      />
    </>
  );
};

export {UserContext, UserContextProvider};
