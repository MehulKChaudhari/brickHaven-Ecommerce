'use client';
import { useState } from "react";
import Card from "ecommerce/components/card";
import { useUserData } from "ecommerce/contexts/userDataContext";
import products from "ecommerce/data/data";

export default function Home() {
  const { addToCart, cart } = useUserData();


  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <main className="min-h-screen p-24 w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-y-20 gap-x-14 mt-10 mb-5">
      {products.map((product) => (
        <Card id={product.id} name={product.name} image={product.image} price={product.price} brand={product.brand} handleAddToCart={() => handleAddToCart(product)} isInCartInitially={cart.some(item => item.id === product.id)} />
      )
      )}
    </main>
  );
}
