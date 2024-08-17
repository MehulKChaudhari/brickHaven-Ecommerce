'use client';

import { useUserData } from 'ecommerce/contexts/userDataContext';
import Card from 'ecommerce/components/card';
import { FaHeart } from 'react-icons/fa';

export default function Wishlist() {
    const { addToCart, cart, wishlist, isInWishlist, toggleWishlist } = useUserData();

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    return (
        <>
            <h1 className="text-2xl md:text-3xl font-extrabold mb-6 md:mb-8">Your Wishlist</h1>
            {wishlist.length > 0 ? (
                <div className="p-4 sm:p-8 w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-y-16 gap-x-12 justify-item-center">
                    {wishlist.map((product) => (
                        <Card
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            image={product.image}
                            price={product.price}
                            brand={product.brand}
                            isInCartInitially={cart.some(item => item.id === product.id)}
                            handleAddToCart={() => handleAddToCart(product)}
                            toggleWishlist={() => toggleWishlist(product)}
                            isInWishlist={isInWishlist(product)}
                        />
                    ))}
                </div>
            ) : (
                <div className='w-full lg:w-1/2 bg-white p-4 md:p-6 rounded-lg shadow-lg'>
                    <p className="text-lg text-gray-500 flex items-center justify-center mb-6">
                        <FaHeart
                            className="text-red-500 text-2xl mr-2"
                            size={20}
                        />Your wishlist is empty.</p>
                </div>
            )}
        </>
    );
}
