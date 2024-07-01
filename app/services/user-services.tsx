import {Address, User} from '../models/market-models';

const usersURL = 'http://192.168.1.102:3000/users';
const signinURL = 'http://192.168.1.102:3000/signin';
const usersURLGuard = 'http://192.168.1.102:3000/644/users' 

export class UserServices {
  createUser = (user: User) => {
    return fetch(usersURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(user),
    });
  };
  //return UserDataResponse

  onSignin = (user: User) => {
    const signinData: Partial<User> = {
      email: user.email,
      password: user.password,
    };
    return fetch(signinURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(signinData),
    });
  };

addAddress = (address: Address, id: number, accessToken: string)=> {
  return fetch(`${usersURLGuard}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({address: address})
  })
}

}
