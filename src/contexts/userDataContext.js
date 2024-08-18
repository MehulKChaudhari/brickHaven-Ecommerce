'use client';
import { createContext, useState, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';

const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        const savedWishlist = localStorage.getItem('wishlist');

        setCart(savedCart ? JSON.parse(savedCart) : []);
        setWishlist(savedWishlist ? JSON.parse(savedWishlist) : []);
        setIsLoading(false);

    }, []);

    useEffect(() => {
        if (typeof window !== "undefined" && !isLoading) {
            localStorage.setItem('cart', JSON.stringify(cart));
        }

    }, [cart]);

    useEffect(() => {
        if (typeof window !== "undefined" && !isLoading) {
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
        }
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
