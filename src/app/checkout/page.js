'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaShoppingCart } from 'react-icons/fa';

export default function Checkout() {
    const router = useRouter();

    function handleContinueShopping() {
        router.push('/');
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
                <div className="text-center">
                    <Image
                        src="/truck.png"
                        alt="Delivery Truck"
                        width={500}
                        height={300}
                        className="mx-auto mb-6"
                    />
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Your Order is Confirmed!</h2>
                    <p className="text-lg text-gray-600 mb-4">
                        Your order will be delivered within 3 working days.
                    </p>
                    <p className="text-lg text-gray-600 flex items-center justify-center mb-6">
                        <FaShoppingCart className="text-2xl mr-2" />
                        Thanks for shopping with us!
                    </p>
                    <button className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-600 transition duration-200" onClick={handleContinueShopping}>
                        Continue Shopping
                    </button>
                </div>
            </div>
        </div>
    );
}
