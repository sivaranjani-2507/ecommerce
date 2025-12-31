"use client";

import { useEffect, useState } from "react";

export default function LikedProducts() {
  const [products, setProducts] = useState<any[]>([]);
  const [likes, setLikes] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  useEffect(() => {
    const savedLikes = localStorage.getItem("likedProducts");
    if (savedLikes) {
      setLikes(JSON.parse(savedLikes));
    }
  }, []);

  const likedProducts = products.filter(product => likes[product.id]);

  return (
    <div className="h-[90vh] p-6 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
      <h1 className="text-white text-3xl font-bold mb-6 text-center">
        Liked Products
      </h1>

      {likedProducts.length === 0 ? (
        <p className="text-white text-center text-lg">No liked products yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {likedProducts.map(product => (
            <div
              key={product.id}
              className="border p-4 rounded shadow flex flex-col bg-white"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-40 mx-auto object-contain"
              />
              <h2 className="mt-2 font-semibold line-clamp-2 text-center">
                {product.title}
              </h2>
              <p className="text-green-600 font-bold text-center">
                ₹ {product.price}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
