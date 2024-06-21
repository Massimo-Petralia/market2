import {User} from '../models/market-models';

const usersURL = 'http://192.168.1.101:3000/users';

export class UserServices {
  createUser = (user: User) => {
    return fetch(usersURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(user)
    });
  };
  //return UserDataResponse 
}
