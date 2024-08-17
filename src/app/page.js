'use client';

import { useState, useEffect, useCallback } from "react";
import Card from "ecommerce/components/card";
import { useUserData } from "ecommerce/contexts/userDataContext";
import products from "ecommerce/data/productsData";
import { toast } from "react-toastify";
import Spinner from "ecommerce/components/spinner";

const INITIAL_PRODUCTS = 6;

export default function Home() {
  const { addToCart, cart, toggleWishlist, isInWishlist } = useUserData();

  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMoreProducts, setHasMoreProducts] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop + 100 >= document.documentElement.scrollHeight) {
        if (hasMoreProducts && !loading) {
          loadMoreProducts();
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMoreProducts]);

  useEffect(() => {
    loadMoreProducts();
  }, []);

  const loadMoreProducts = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      const nextPage = currentPage + 1;
      const indexOfLastProduct = nextPage * INITIAL_PRODUCTS;
      const newProducts = products.slice(currentPage * INITIAL_PRODUCTS, indexOfLastProduct);

      if (newProducts.length === 0) {
        setHasMoreProducts(false);
      } else {
        setDisplayedProducts(prev => [...prev, ...newProducts]);
        setCurrentPage(nextPage);
      }
      setLoading(false);
    }, 1000);
  }, [currentPage, loading, hasMoreProducts]);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast(`${product.name} added to cart`, { type: "success" });
  };

  return (
    <>
      <h1 className="text-2xl md:text-3xl font-extrabold mb-6 md:mb-8">Our Products</h1>
      <div className="p-4 sm:p-8 w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-y-16 gap-x-12 justify-item-center">
        {displayedProducts.map((product) => (
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

      {loading && (
        <div className="flex justify-center items-center mt-8">
          <Spinner />
        </div>
      )}
    </>
  );
}
