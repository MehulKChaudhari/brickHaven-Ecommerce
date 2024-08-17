'use client';

export default function CouponCard({ coupon, selectedCoupon, onApplyCoupon }) {
    return (
        <div
            key={coupon.code}
            onClick={() => onApplyCoupon(coupon)}
            className={`cursor-pointer p-3 rounded-lg border 
            ${selectedCoupon?.code === coupon.code ? 'border-yellow-500 bg-yellow-100' : 'border-gray-300'} 
            hover:bg-yellow-50 transition`}
        >
            <div className="flex flex-col sm:flex-row justify-between">
                <p className="text-xs sm:text-sm font-semibold">{coupon.name}</p>
                <p className="text-xs sm:text-sm text-gray-600 sm:ml-2 mt-1 sm:mt-0">
                    {coupon.code}
                </p>
            </div>
        </div>
    );
}
