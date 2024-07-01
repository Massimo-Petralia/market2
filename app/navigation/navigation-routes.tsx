const Routes = {
  root: {
    main: 'Market2',
    itemDetail: 'Product detail',
    tab : {
        home: 'Home',
        user: {
            index : 'User',
            signin: 'Signin',
            signup: 'Signup',
            address: 'Address'
        },
        Add: 'Sell',
        cart: 'Cart',
    }
  },
}as const;

export default Routes;
