import React from "react";
import { useNavigate } from "react-router-dom";
import { clearCart, removeItem } from "../ReduxStore/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import MenuItems from "./MenuItems";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(store => store.cart.items);
  const hasItems = cartItems.length > 0;

  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <div className='bg-mainBg h-screen flex flex-col items-center justify-center p-4'>
      <div className='bg-white max-w-screen-md w-full rounded-lg shadow-lg p-6 overflow-y-auto'> 
        <h1 className='text-3xl font-bold text-center mb-4'>Your Cart</h1>
        {hasItems ? (
          <>
            <div className='cart-buttons flex flex-col md:flex-row justify-center gap-4 mb-4'>
              <button
                className='rounded-md bg-blue-400 p-2 text-white hover:bg-blue-500 transition w-full md:w-auto'
                onClick={handleClear}
              >
                Clear Cart
              </button>
            </div>
            <MenuItems items={cartItems} /> 
          </>
        ) : (
          <div className='text-center mt-6'>
            <img
              className='mx-auto mb-4 h-48 rounded-md shadow-md'
              src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0'
              alt='Empty Cart'
            />
            <h2 className='text-2xl font-semibold mb-2'>Your cart is empty</h2>
            <p className='text-gray-600 mb-4'>
              You can go to the home page to view more restaurants
            </p>
            <button
              className='p-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition'
              onClick={() => navigate("/")}
            >
              SEE RESTAURANTS NEAR YOU
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
