const Routes = {
  root: {
    main: 'Main',
    itemDetail: 'Product detail',
    tab : {
        home: 'Home',
        user: {
            index : 'User',
            signin: 'Signin',
            signup: 'Signup',
        },
        Add: 'Sell',
        cart: 'Cart',
    }
  },
}as const;

export default Routes;
