'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

export const Navbar = () => {
    const router = useRouter();

    const onClickHandler = () => {
        router.push('cart');
    }
    const onClickHome = () => {
        router.push('/');
    }

    return (
        <div className="flex flex-row justify-between items-center p-4 bg-gray-800 text-white shadow-md">
            <div className="flex flex-row gap-5 items-center">
                <div onClick={onClickHome} className="cursor-pointer text-yellow-500 text-3xl font-bold tracking-wider hover:text-yellow-400 transition">
                    <span className="text-red-600">Brick</span>Haven
                </div>
                <nav className="cursor-pointer hover:text-yellow-400 transition">
                    Products
                </nav>
            </div>
            <div>
                <button onClick={onClickHandler} className="relative p-2 text-yellow-400 hover:text-yellow-500 transition">
                    <FaShoppingCart size={24} />
                    <span className="absolute top-0 right-0 bg-red-500 text-xs rounded-full w-5 h-5 flex items-center justify-center text-white">
                        3 {/* Replace with dynamic cart count */}
                    </span>
                </button>
            </div>
        </div>
    );
}
