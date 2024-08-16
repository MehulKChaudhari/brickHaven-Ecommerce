'use client';

import { useUserData } from 'ecommerce/contexts/userDataContext';
import Card from 'ecommerce/components/card';

export default function Wishlist() {
    const { addToCart, cart, wishlist, isInWishlist, toggleWishlist } = useUserData();

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    return (
        <>
            <h1 className="text-2xl md:text-3xl font-extrabold mb-6 md:mb-8">Your Wishlist</h1>
            <main className="p-4 sm:p-8 w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-y-16 gap-x-12 justify-item-center">
                {wishlist.length > 0 ? (
                    wishlist.map((product) => (
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
                    ))
                ) : (
                    <p className="text-gray-500 text-center">Your wishlist is empty.</p>
                )}
            </main>
        </>
    );
}
