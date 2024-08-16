'use client';
import Card from "ecommerce/components/card";
import { useUserData } from "ecommerce/contexts/userDataContext";
import products from "ecommerce/data/data";
import { toast } from "react-toastify";

export default function Home() {
  const { addToCart, cart, toggleWishlist, isInWishlist } = useUserData();

  const handleAddToCart = (product) => {
    addToCart(product);
    toast(`${product.name} added to card`, { type: "success" });
  };

  return (
    <>
      <h1 className="text-2xl md:text-3xl font-extrabold mb-6 md:mb-8">Our Products</h1>
      <div className="p-4 sm:p-8 w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-y-16 gap-x-12 justify-item-center">
        {products.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            brand={product.brand}
            handleAddToCart={() => handleAddToCart(product)}
            isInCartInitially={cart.some(item => item.id === product.id)}
            toggleWishlist={() => toggleWishlist(product)}
            isInWishlist={isInWishlist(product)}
          />
        ))}
      </div>
    </>
  );
}
