import {useContext} from 'react';
import {ProductContext} from '../context/product-context/product-context-provider';
import {ProductContextType} from '../context/product-context/product-context-types';
import {UserContext} from '../context/user-context/user-context-provider';
import {UserContextType} from '../context/user-context/user-context-types';
export const handleAuthorization = () => {
  const {user} = useContext<UserContextType>(UserContext) || {};
  const {product} = useContext<ProductContextType>(ProductContext) || {};
  if (!user || !user.id) {
    return false;
  }
  if (!product || !product.id) {
    return true;
  }
  return user.id === product.userId;
};
