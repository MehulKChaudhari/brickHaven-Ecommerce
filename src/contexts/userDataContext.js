'use client';
import { createContext, useState, useContext } from 'react';

const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, { ...product, quantity: 1 }]);
    };

    const removeFromCart = (itemId) => {
        setCart((prevCart) =>
            prevCart.filter(cartItem => cartItem.id !== itemId)
        );
    };

    const updateQuantity = (itemId, newQuantity) => {
        if (newQuantity <= 0) {
            removeFromCart(itemId);
            return;
        }
        setCart((prevCart) =>
            prevCart.map(cartItem =>
                cartItem.id === itemId
                    ? { ...cartItem, quantity: newQuantity }
                    : cartItem
            )
        );
    };

    const isInWishlist = (product) => {
        const existingProduct = wishlist.find(item => item.id === product.id);
        return existingProduct;
    }

    const toggleWishlist = (product) => {
        const existingProduct = isInWishlist(product);

        if (existingProduct) {
            setWishlist(wishlist.filter(item => item.id !== product.id));
        } else {
            setWishlist([...wishlist, product]);
        }
    };

    return (
        <UserDataContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, wishlist, toggleWishlist, isInWishlist }}>
            {children}
        </UserDataContext.Provider>
    );
};

export const useUserData = () => useContext(UserDataContext);
