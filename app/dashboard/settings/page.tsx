"use client";

import { useEffect, useState } from "react";

export default function Products() {
    const [products, setProducts] = useState<any[]>([]);
    const [counts, setCounts] = useState<{ [key: number]: number }>({});
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

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
                {products.map(product => (
                    <div
                        key={product.id}
                        className="border-[#969696] p-4 rounded shadow flex flex-col bg-white"
                    >
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
                                className="flex-1 bg-[#ADD8E6] text-black py-1 rounded hover:bg-[#40E0D0] cursor-pointer "
                            >
                                Add
                            </button>

                            <button
                                onClick={() => handleDelete(product.id)}
                                className="flex-1 bg-[#FAA0A0] text-black py-1 rounded hover:bg-[#E30B5C] cursor-pointer "
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
