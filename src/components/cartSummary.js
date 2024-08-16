'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUserData } from 'ecommerce/contexts/userDataContext';

export default function CartSummary({ cart, coupons }) {
    const [selectedCoupon, setSelectedCoupon] = useState(null);
    const [percentageDiscount, setPercentageDiscount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const { setCart } = useUserData();
    const router = useRouter();

    const calculateSubtotal = () => {
        return cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
    };

    const calculateDiscountAmount = () => {
        const subtotal = calculateSubtotal();
        return ((percentageDiscount / 100) * subtotal).toFixed(2);
    };

    const calculateTotal = () => {
        const subtotal = calculateSubtotal();
        const discountAmount = calculateDiscountAmount();
        return (subtotal - discountAmount).toFixed(2);
    };

    const applyCoupon = (coupon) => {
        setSelectedCoupon(coupon);
        setPercentageDiscount(coupon.discount);
    };

    const handleCheckout = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setCart([]);
            router.push('/checkout');
        }, 2000);
    };

    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Summary</h2>
            <div className="mb-4">
                <p className="text-gray-600">Subtotal: ${calculateSubtotal()}</p>
            </div>
            {selectedCoupon && (
                <div className="mb-4">
                    <p className="text-gray-600">
                        Discount ({selectedCoupon.name}): -${calculateDiscountAmount()}
                    </p>
                </div>
            )}
            <div className="mb-4">
                <label className="text-gray-600">Coupon Code:</label>
                <input
                    type="text"
                    value={selectedCoupon ? selectedCoupon.code : ''}
                    readOnly
                    className="border border-gray-300 p-1 rounded w-full mt-2"
                />
            </div>
            <div className="mb-6">
                <p className="text-gray-600">Total: ${calculateTotal()}</p>
            </div>
            <button
                onClick={handleCheckout}
                disabled={cart.length === 0 || isLoading}
                className={`w-full ${cart.length === 0 ? "bg-yellow-200 disabled" : "bg-yellow-500"} text-white py-2 rounded-lg hover:bg-yellow-600 transition mb-4 flex justify-center items-center`}
            >
                {isLoading ? (
                    <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8v-8H4z"></path>
                    </svg>
                ) : (
                    'Checkout'
                )}
            </button>
            <h3 className="text-lg font-semibold mb-2">Available Coupons</h3>
            <div className="grid grid-cols-2 gap-4">
                {coupons.map((coupon) => (
                    <div
                        key={coupon.code}
                        onClick={() => applyCoupon(coupon)}
                        className={`cursor-pointer p-3 rounded-lg border 
                        ${selectedCoupon?.code === coupon.code ? 'border-yellow-500 bg-yellow-100' : 'border-gray-300'} 
                        hover:bg-yellow-50 transition`}
                    >
                        <p className="text-sm font-semibold">{coupon.name}</p>
                        <p className="text-gray-600">{coupon.discount}% off</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
