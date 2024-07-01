import React, {createContext, useContext, useState} from 'react';
import {Address, Product, User, UserDataResponse} from '../../models/market-models';
import {DefaultAddress, DefaultUser} from '../../models/default-values';
import {UserContextType} from './user-context-types';
import {DefaultUserContext} from './default-values';
import {UserServices} from '../../services/user-services';
import {CartServices} from '../../services/cart-services';
import {MarketContext} from '../market-context/market-context-provider';
import {MarketContextType} from '../market-context/market-context-type';
const UserContext = createContext<UserContextType>(DefaultUserContext);
const UserContextProvider = ({children}: {children: React.ReactNode}) => {
  const {toggleModal, updateNotification} =
    useContext<MarketContextType>(MarketContext);

  const userServices = new UserServices();
  const cartServices = new CartServices();
  const [user, setUser] = useState<User>(DefaultUser);
  const [userAddress, setUserAddress] = useState<Address>(DefaultAddress)

  const onSignup = (user: User) => {
    userServices
      .createUser(user)
      .then(async response => {
        //   const userDataResponse: UserDataResponse = await response.json();
        if (response.ok) {
          // const {accessToken, user} = userDataResponse;
          // const userData: User = {
          //   accessTokken: accessToken,
          //   name: user.name,
          //   email: user.email,
          //   password: user.password,
          //   cart: [],
          // };
          updateNotification({type: 'info', text: `Wellcome ${user.name} !`});
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
            cart: user.cart,
            address: user.address
          };
          setUser(userData);
          setUserAddress(userData.address)
        }
      })
      .catch(error => console.error('signin post request failed: ', error));
  };

  const addToUserCart = (product: Product, id: number, accessToken: string) => {
    const cart: Product[] = [...user.cart, product];
    cartServices
      .addToCart(cart, id, accessToken)
      .then(async response => {
        const data = await response.json();
        const cart: Product[] = data.cart;
        setUser(prevUser => ({...prevUser, cart: cart}));
        updateNotification({type: 'info', text: 'Product added to cart'})
        toggleModal()

      })
      .catch(error => console.log('patch request failed: ', error));
  };

 const onAddAddress = (address:Address, id: number)=> {
  userServices.addAddress(address, id, user.accessTokken).then(
    async response => {
      const data = await response.json()
      console.log('response: ', data)
      setUser(prevState => ({...prevState, address: data.address}))
      setUserAddress(data.address)
    }
  )
 }

  
  return (
    <UserContext.Provider value={{user,userAddress,setUser, onSignup, onSignin, addToUserCart, setUserAddress, onAddAddress}}>
      {children}
    </UserContext.Provider>
  );
};

export {UserContext, UserContextProvider};
