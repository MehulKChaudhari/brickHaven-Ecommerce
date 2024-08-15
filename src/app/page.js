import Image from "next/image";
import { Card } from "ecommerce/components/card";
import products from "ecommerce/data/data";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-row items-center p-24 flex-wrap w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
      {products.map((product) => (
        <Card id={product.id} name={product.name} image={product.image} price={product.price} brand={product.brand}/>
      )
      )}
    </main>
  );
}
