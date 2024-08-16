'use client';

import { useUserData } from "ecommerce/contexts/userDataContext";
import CartCard from "ecommerce/components/cartCard";
import CartSummary from "ecommerce/components/cartSummary";
import { useRouter } from "next/navigation";

export default function Cart() {
    const { cart, updateQuantity, removeFromCart } = useUserData();
    const router = useRouter();

    const coupons = [
        { code: 'SAVE10', name: 'Save 10%', discount: 10 },
        { code: 'SAVE20', name: 'Save 20%', discount: 20 },
        { code: 'BRICK5', name: 'Brick Discount 5%', discount: 5 },
    ];

    const handleContinueShopping = () => {
        router.push('/');
    };

    return (
        <main className="w-full flex min-h-screen flex-col items-center p-4 md:p-8">
            <h1 className="text-2xl md:text-3xl font-extrabold mb-6 md:mb-8">Your Cart</h1>
            <div className="w-full max-w-5xl flex flex-col justify-center lg:flex-row gap-6 md:gap-8">
                <div className="w-full lg:w-2/3 bg-white p-4 md:p-6 rounded-lg shadow-lg">
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
                        <div className="text-gray-500 text-center">Your cart is empty.</div>
                    )}
                </div>
                {cart.length > 0 && (
                    <div className="w-full lg:w-1/3 bg-gray-50 p-4 md:p-6 rounded-lg shadow-lg">
                        <CartSummary cart={cart} coupons={coupons} />
                    </div>
                )}
            </div>
            <div className="w-full max-w-5xl flex justify-center mt-8">
                <button
                    onClick={handleContinueShopping}
                    className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition"
                >
                    Continue Shopping
                </button>
            </div>
        </main>
    );
}
