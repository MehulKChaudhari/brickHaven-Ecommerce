'use client';
import { createContext, useState, useContext } from 'react';

const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const updateUser = (userData) => {
        setUser(userData);
    };

    const addToCart = (product) => {
        const existingProduct = cart.find(item => item.id === product.id);

        if (existingProduct) {
            setCart(cart.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (itemId) => {
        setCart((prevCart) =>
            prevCart.filter(cartItem => cartItem.id !== itemId)
        );
    };

    const updateQuantity = (itemId, newQuantity) => {
        if(newQuantity <= 0) {
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

    return (
        <UserDataContext.Provider value={{ user, updateUser, cart, addToCart, updateQuantity, removeFromCart }}>
            {children}
        </UserDataContext.Provider>
    );
};

export const useUserData = () => useContext(UserDataContext);
