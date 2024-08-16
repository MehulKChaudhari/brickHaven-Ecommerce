'use client';

import { useUserData } from "ecommerce/contexts/userDataContext";
import CartCard from "ecommerce/components/cartCard";

export default function Cart() {
    const { cart, updateQuantity, removeFromCart } = useUserData();

    return (
        <main className="flex min-h-screen flex-col items-center p-8 bg-gray-100">
            <h1 className="text-3xl font-extrabold mb-8">Your Cart</h1>
            <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg">
                {cart.length > 0 ? (
                    cart.map((product) => (
                        <CartCard
                            key={product.id}
                            product={product}
                            updateQuantity={updateQuantity}
                            removeFromCart={removeFromCart}
                        />
                    ))
                ) : (
                    <p className="text-gray-500 text-center">Your cart is empty.</p>
                )}
            </div>
        </main>
    );
}
