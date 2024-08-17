'use client';
import { createContext, useState, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';

const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const [wishlist, setWishlist] = useState(() => {
        const savedWishlist = localStorage.getItem('wishlist');
        return savedWishlist ? JSON.parse(savedWishlist) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    const addToCart = (product) => {
        setCart([...cart, { ...product, quantity: 1 }]);
    };

    const removeFromCart = (itemId) => {
        setCart((prevCart) =>
            prevCart.filter(cartItem => cartItem.id !== itemId)
        );
        toast("Removed from cart", { type: "info" });
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
        return wishlist.some(item => item.id === product.id);
    };

    const toggleWishlist = (product) => {
        const existingProduct = isInWishlist(product);

        if (existingProduct) {
            setWishlist(wishlist.filter(item => item.id !== product.id));
            toast(`${product.name} removed from wishlist`, { type: "info" });
        } else {
            setWishlist([...wishlist, product]);
            toast(`${product.name} added to wishlist`, { type: "success" });
        }
    };

    return (
        <UserDataContext.Provider value={{ cart, setCart, addToCart, updateQuantity, removeFromCart, wishlist, toggleWishlist, isInWishlist }}>
            {children}
        </UserDataContext.Provider>
    );
};

export const useUserData = () => useContext(UserDataContext);
