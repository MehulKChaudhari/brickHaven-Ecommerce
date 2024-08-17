'use client';

import { FaPlus, FaMinus, FaTrashAlt } from "react-icons/fa";

export default function CartCard({ product, updateQuantity, removeFromCart }) {
    const { brand, id, name, image, price, quantity } = product;

    const getFinalPrice = () => {
        return (price * quantity).toFixed(2);
    };

    return (
        <div className="flex items-center justify-between sm:flex-row flex-col border-b border-gray-200 pb-4 mb-4 last:border-b-0" key={id}>
            <div className="flex items-center">
                <img src={image} alt={name} className="w-20 h-20 object-cover rounded-md" />
                <div className="ml-4">
                    <p className="text-xl font-semibold">{name}</p>
                    <p className="text-gray-500">Brand: {brand}</p>
                    <div className="flex items-center mt-2 my-3 sm:my-0 gap-2">
                        <button
                            onClick={() => updateQuantity(id, quantity - 1)}
                            className="p-1 text-gray-600 hover:text-black hover:bg-gray-200 rounded-full"
                        >
                            <FaMinus size={12} />
                        </button>
                        <span className="mx-2 text-lg">{quantity}</span>
                        <button
                            onClick={() => updateQuantity(id, quantity + 1)}
                            className="p-1 text-gray-600 hover:text-black hover:bg-gray-200 rounded-full disabled:opacity-40 disabled:cursor-not-allowed"
                            disabled={product.stock <= quantity}
                        >
                            <FaPlus size={12} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex items-center pl-4 sm:pl-0">
                <p className="text-xl font-bold mr-6">${getFinalPrice()}</p>
                <button
                    onClick={() => removeFromCart(id)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                >
                    <FaTrashAlt size={20} />
                </button>
            </div>
        </div>
    );
}
