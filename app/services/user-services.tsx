import {User} from '../models/market-models';

const usersURL = 'http://192.168.1.102:3000/users';
const signinURL = 'http://192.168.1.102:3000/signin';

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
}
