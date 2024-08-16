'use client';
import { createContext, useState, useContext } from 'react';
import { toast } from 'react-toastify';

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
        toast("Removed to cart", { type: "info" });
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
            toast(`${product.name} removed to wishlist`, { type: "info" });
        } else {
            setWishlist([...wishlist, product]);
            toast(`${product.name} added to wishlist`, { type: "success" });
        }
    };

    return (
        <UserDataContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, wishlist, toggleWishlist, isInWishlist }}>
            {children}
        </UserDataContext.Provider>
    );
};

export const useUserData = () => useContext(UserDataContext);
