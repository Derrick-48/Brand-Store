import React, { createContext, useContext, useState } from "react";

// Create a context for the cart
const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevCartItems) => {
      const existingItemIndex = prevCartItems.findIndex(
        (item) => item.id === product.id
      );
      if (existingItemIndex > -1) {
        // If product is already in the cart, increase quantity
        const updatedItems = [...prevCartItems];
        updatedItems[existingItemIndex].quantity += 1;
        return updatedItems;
      } else {
        // If product is not in the cart, add it with quantity 1
        return [...prevCartItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) => {
      return prevCartItems.filter((item) => item.id !== productId);
    });
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
