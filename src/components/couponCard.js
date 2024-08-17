'use client';

import { FaTimes } from 'react-icons/fa';

export default function CouponCard({ coupon, selectedCoupon, onApplyCoupon }) {
    const isSelected = selectedCoupon?.code === coupon.code;

    const handleRemoveCoupon = (e) => {
        e.stopPropagation();
        onApplyCoupon(null);
    };

    return (
        <div
            key={coupon.code}
            onClick={() => onApplyCoupon(coupon)}
            className={`cursor-pointer p-4 rounded-xl border shadow-sm
            ${isSelected ? 'border-yellow-500 bg-yellow-100' : 'border-gray-300'} 
            hover:bg-yellow-50 transition-colors duration-300 relative`}
        >
            <div className="flex flex-col sm:flex-row justify-between items-center">
                <p className="text-sm sm:text-base font-semibold text-gray-700">{coupon.name}</p>
                <p className="text-xs sm:text-sm text-gray-500 sm:ml-2 mt-1 sm:mt-0">
                    {coupon.code}
                </p>
            </div>
            {isSelected && (
                <button
                    onClick={handleRemoveCoupon}
                    className="absolute top-2 right-2 text-gray-500 hover:text-red-600"
                >
                    <FaTimes size={14} />
                </button>
            )}
        </div>
    );
}
