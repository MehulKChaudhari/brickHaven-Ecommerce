'use client';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaHeart } from "react-icons/fa";

export default function Card({ id, name, image, price, brand, handleAddToCart, isInCartInitially, toggleWishlist, isInWishlist }) {

  const [isInCart, setIsInCart] = useState(isInCartInitially);
  const router = useRouter();

  useEffect(() => {
    setIsInCart(isInCartInitially);
  }, [isInCartInitially]);

  const handleGoToCart = () => {
    router.push('/cart');
  };

  return (
    <div
      className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl relative"
      key={id}
    >
      <img src={image} alt={name} className="h-80 w-72 object-cover rounded-t-xl" />
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">{brand}</span>
        <p className="text-lg font-bold text-black truncate capitalize">{name}</p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black cursor-auto my-3">${price}</p>
          <div className="ml-auto flex items-center space-x-2">
            {isInCart ? (
              <button
                className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600"
                onClick={handleGoToCart}
              >
                Go to Cart
              </button>
            ) : (
              <button
                className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
      <FaHeart
        className={`${isInWishlist ? "text-red-500" : "text-black"} sm:hover:text-red-400 hover:border-red-500 cursor-pointer transition-colors absolute top-3 right-3`}
        size={20}
        style={{ backgroundColor: 'transparent' }}
        onClick={toggleWishlist}
      />
    </div>
  );
}
