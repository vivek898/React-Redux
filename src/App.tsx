import React, { Fragment, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
import Auth from './layout/auth';
import Header from './layout/header';
import { useDispatch, useSelector } from 'react-redux';
import UserProfile from './layout/userProfile';
import Cart from './Cart/cart';
import Shopping from './ShoppingCart/shopping';
import Product from './Product/product';
import { uiAction } from './store/ui-slice';
import Notification from './Cart/notification';

let isVisible = true;

function App() {
  // const auth: any = useSelector<any>(state => state.auth.isAuth);
  const dispatch = useDispatch();
  const showCart: any = useSelector<any>(state => state.ui.cartVisible);
  const cart: any = useSelector<any>(state => state.cart);
  const notification: any = useSelector<any>(state => state.ui.notification);
  useEffect(() => {
    const sendCartData = async () => {
      dispatch(uiAction.showNotification({
        status: 'Pending',
        title: 'Sending...',
        message: "Data is sending",
      }));
      const response = await fetch("https://redux-129a0-default-rtdb.firebaseio.com/cart.json",
        {
          method: 'PUT',
          body: JSON.stringify({ items: cart.items, totalQuantity: cart.totalQuantity })
        });

      if (!response.ok) {
        throw new Error('Sending Cart data failed');
      }
      dispatch(uiAction.showNotification({
        status: 'success',
        title: 'Success...',
        message: "Data Successfully sending",
      }));

    }
    if (isVisible) {
      isVisible = false;
      return;
    }

    sendCartData().catch((error) => {
      dispatch(uiAction.showNotification({
        status: 'error',
        title: 'Error...',
        message: "Data is not Sending",
      }));
    })
  }, [cart, dispatch]);
  return (
    < Fragment >
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
      {/* {!auth && <Header />}
      {auth && <UserProfile />}
      {<Auth />}
      <Counter /> */}
      {<Cart />}
      {showCart && <Shopping />}
      <Product />
    </Fragment >
  );
}

export default App;
