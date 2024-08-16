'use client';

import { useUserData } from 'ecommerce/contexts/userDataContext';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';

export const Navbar = () => {
    const { cart, wishlist } = useUserData();
    const router = useRouter();

    const onClickHandler = () => {
        router.push('cart');
    }

    const onClickHome = () => {
        router.push('/');
    }

    const onWishlistClick = () => {
        router.push('/wishlist');
    }

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex flex-row justify-between items-center p-4 bg-white text-black shadow-md border-b border-gray-200">
            <div className="flex flex-row gap-5 items-center">
                <div onClick={onClickHome} className="cursor-pointer text-yellow-500 text-3xl font-bold tracking-wider hover:text-yellow-400 transition">
                    <span className="text-red-600">Brick</span>Haven
                </div>
            </div>
            <div className="flex items-center space-x-6">
                <button onClick={onWishlistClick} className="relative p-2 text-black hover:text-red-500 transition">
                    <FaHeart size={24} />
                    <span className="absolute top-0 right-0 bg-red-600 text-xs rounded-full w-5 h-5 flex items-center justify-center text-white">
                        {wishlist.length}
                    </span>
                </button>
                <button onClick={onClickHandler} className="relative p-2 text-black hover:text-yellow-500 transition">
                    <FaShoppingCart size={24} />
                    <span className="absolute top-0 right-0 bg-red-600 text-xs rounded-full w-5 h-5 flex items-center justify-center text-white">
                        {cart.length}
                    </span>
                </button>
            </div>
        </div>
    );
}
