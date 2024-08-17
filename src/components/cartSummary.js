'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUserData } from 'ecommerce/contexts/userDataContext';
import CouponCard from 'ecommerce/components/couponCard';
import Spinner from './spinner';

export default function CartSummary({ cart, coupons }) {
    const [selectedCoupon, setSelectedCoupon] = useState(null);
    const [couponCodeInput, setCouponCodeInput] = useState('');
    const [couponError, setCouponError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { setCart } = useUserData();
    const router = useRouter();

    const calculateSubtotal = () => {
        return cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
    };

    const calculateDiscountAmount = () => {
        const subtotal = calculateSubtotal();
        if (selectedCoupon?.type === 'FIXED') {
            return selectedCoupon.discount;
        }
        return ((selectedCoupon?.discount / 100) * subtotal).toFixed(2);
    };

    const calculateTotal = () => {
        const subtotal = calculateSubtotal();
        if (!selectedCoupon) {
            return subtotal;
        }
        const discountAmount = calculateDiscountAmount();
        return (subtotal - discountAmount).toFixed(2);
    };

    const applyCoupon = (coupon) => {
        if (coupon) {
            setSelectedCoupon(coupon);
            setCouponCodeInput(coupon.code);
            setCouponError(false);
        } else {
            setSelectedCoupon(null);
            setCouponCodeInput('');
        }
    };

    const handleCouponInputChange = (e) => {
        setCouponCodeInput(e.target.value);
        setCouponError(false);
    };

    const handleApplyCoupon = () => {
        const coupon = coupons.find(c => c.code.toUpperCase() === couponCodeInput.toUpperCase());
        if (coupon) {
            applyCoupon(coupon);
        } else {
            setCouponError(true);
            setSelectedCoupon(null);
        }
    };

    const handleCheckout = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            router.push('/checkout');
        }, 2000);
    };

    return (
        <div className="p-4 sm:p-6 bg-gray-100 rounded-lg shadow-md w-full">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Summary</h2>
            <div className="mb-4">
                <p className="text-sm sm:text-base text-gray-600">Subtotal: ${calculateSubtotal()}</p>
            </div>
            {selectedCoupon && (
                <div className="mb-4">
                    <p className="text-sm sm:text-base text-gray-600">
                        Discount ({selectedCoupon.name}): -${calculateDiscountAmount()}
                    </p>
                </div>
            )}
            <div className="mb-4">
                <label className="text-sm sm:text-base text-gray-600">Coupon Code:</label>
                <div className="flex items-center mt-2">
                    <input
                        type="text"
                        value={couponCodeInput}
                        onChange={handleCouponInputChange}
                        className={`border p-1 rounded w-full ${couponError ? 'border-red-500' : 'border-gray-300'}`}
                        disabled={!!selectedCoupon}
                    />
                    <button
                        onClick={handleApplyCoupon}
                        disabled={!!selectedCoupon}
                        className={`py-1 px-3 rounded-lg ml-2 transition 
                        ${selectedCoupon ? 'bg-green-200 text-green-800 cursor-not-allowed' : 'bg-yellow-500 text-white hover:bg-yellow-600'}`}
                    >
                        {selectedCoupon ? 'Coupon Applied' : 'Apply'}
                    </button>
                </div>
                {couponError && <p className="text-red-500 text-sm mt-2">Coupon does not exist</p>}
            </div>
            <div className="mb-6">
                <p className="text-sm sm:text-base text-gray-600">Total: ${calculateTotal()}</p>
            </div>
            <button
                onClick={handleCheckout}
                disabled={cart.length === 0 || isLoading}
                className={`w-full text-sm sm:text-base py-2 rounded-lg transition mb-4 flex justify-center items-center 
                    ${cart.length === 0 ? "bg-yellow-200 disabled" : "bg-yellow-500 text-white hover:bg-yellow-600"}`}
            >
                {isLoading ? (
                    <Spinner width="16" height="16" />
                ) : (
                    'Checkout'
                )}
            </button>
            <h3 className="text-base sm:text-lg font-semibold mb-2">Available Offers 🎉</h3>
            <div className="grid grid-cols-1 gap-4">
                {coupons.map((coupon) => (
                    <CouponCard
                        key={coupon.code}
                        coupon={coupon}
                        selectedCoupon={selectedCoupon}
                        onApplyCoupon={applyCoupon}
                    />
                ))}
            </div>
        </div>
    );
}
