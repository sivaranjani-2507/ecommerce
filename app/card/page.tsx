"use client";

import { useEffect, useState } from "react";

export default function CardProducts() {
  const [products, setProducts] = useState<any[]>([]);
  const [counts, setCounts] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));

    const savedCounts = localStorage.getItem("productCounts");
    if (savedCounts) {
      setCounts(JSON.parse(savedCounts));
    }
  }, []);

  const addedProducts = products.filter(product => counts[product.id] > 0);

  return (
    <div className="h-[90vh] p-6 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
      <h1 className="text-white text-3xl font-bold mb-6 text-center">Added Products</h1>

      {addedProducts.length === 0 ? (
        <p className="text-white text-center text-lg">No products added yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {addedProducts.map(product => (
            <div
              key={product.id}
              className="border p-4 rounded shadow flex flex-col bg-white"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-40 mx-auto object-contain"
              />
              <h2 className="mt-2 font-semibold line-clamp-2 text-center">{product.title}</h2>
              <p className="text-green-600 font-bold text-center">₹ {product.price}</p>
              <div className="mt-2 flex justify-center">
                <span className="text-sm font-bold">Count: {counts[product.id]}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
