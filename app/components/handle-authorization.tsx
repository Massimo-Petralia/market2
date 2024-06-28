import {useContext} from 'react';
import {ProductContext} from '../context/product-context/product-context-provider';
import {ProductContextType} from '../context/product-context/product-context-types';
import {UserContext} from '../context/user-context/user-context-provider';
import {UserContextType} from '../context/user-context/user-context-types';
const {user} = useContext<UserContextType>(UserContext) || {};
const {product} = useContext<ProductContextType>(ProductContext) || {};
export const handleCrudAuthorization = () => {
  if (!user || !user.id) {
    return false;
  }
  if (!product || !product.id) {
    return true;
  }
  return user.id === product.userId;
};

//can buy ?
export const handlePurchaseAuthorization = () => {
  if (!product || !product.id) {
    return false;
  }
  return user.id !== product.userId;
};
