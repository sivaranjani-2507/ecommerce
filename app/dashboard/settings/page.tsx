"use client";

import { useEffect, useState } from "react";
import { PiHeartLight, PiHeartFill } from "react-icons/pi";

export default function Products() {
    const [products, setProducts] = useState<any[]>([]);
    const [counts, setCounts] = useState<{ [key: number]: number }>({});
    const [likes, setLikes] = useState<{ [key: number]: boolean }>({});
    const [zoomImage, setZoomImage] = useState<string | null>(null);
    

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    

    useEffect(() => {
        const savedCounts = localStorage.getItem("productCounts");
        if (savedCounts) {
            setCounts(JSON.parse(savedCounts));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("productCounts", JSON.stringify(counts));
    }, [counts]);

    useEffect(() => {
        const savedLikes = localStorage.getItem("likedProducts");
        if (savedLikes) {
            setLikes(JSON.parse(savedLikes));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("likedProducts", JSON.stringify(likes));
    }, [likes]);

    const handleAdd = (id: number) => {
        setCounts(prev => ({
            ...prev,
            [id]: (prev[id] || 0) + 1,
        }));
    };

    const handleDelete = (id: number) => {
        setCounts(prev => ({
            ...prev,
            [id]: prev[id] > 0 ? prev[id] - 1 : 0,
        }));
    };

   const toggleLike = (id: number) => {
  setLikes(prev => {
    const newLikes = { ...prev, [id]: !prev[id] };
    
    const savedLiked = JSON.parse(localStorage.getItem("persistedLikedProducts") || "[]");
    if (newLikes[id] && !savedLiked.includes(id)) {
      savedLiked.push(id);
      localStorage.setItem("persistedLikedProducts", JSON.stringify(savedLiked));
    }

    return newLikes;
  });
};


    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
                {products.map(product => (
                    <div
                        key={product.id}
                        className="relative border-[#C4C4C4] p-4 rounded shadow flex flex-col bg-white"
                    >
                        <button
                            onClick={() => toggleLike(product.id)}
                            className="absolute top-2 right-2"
                        >
                            {likes[product.id] ? (
                                <PiHeartFill className="w-6 h-6 text-red-500" />
                            ) : (
                                <PiHeartLight className="w-6 h-6 text-gray-400 hover:text-red-400" />
                            )}
                        </button>

                        <img
                            src={product.image}
                            alt={product.title}
                            className="h-40 mx-auto object-contain cursor-pointer transition-transform duration-300 hover:scale-110"
                            onClick={() => setZoomImage(product.image)}
                        />

                        <h2 className="mt-2 font-semibold line-clamp-2 text-center">
                            {product.title}
                        </h2>

                        <p className="text-green-600 font-bold text-center">
                            ₹ {product.price}
                        </p>

                        {counts[product.id] > 0 && (
                            <div className="mt-2 flex justify-center">
                                <span className="text-sm font-bold">
                                    Count: {counts[product.id]}
                                </span>
                            </div>
                        )}

                        <div className="mt-auto flex gap-2 pt-4">
                            <button
                                onClick={() => handleAdd(product.id)}
                                className="flex-1 bg-[#ADD8E6] text-black py-1 rounded hover:bg-[#40E0D0]"
                            >
                                Add
                            </button>

                            <button
                                onClick={() => handleDelete(product.id)}
                                className="flex-1 bg-[#FAA0A0] text-black py-1 rounded hover:bg-[#E30B5C]"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {zoomImage && (
                <div
                    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                    onClick={() => setZoomImage(null)}
                >
                    <img
                        src={zoomImage}
                        alt="Zoom"
                        className="max-h-[50vh] max-w-[40vw]"
                    />
                </div>
            )}
        </> 
    );
}
