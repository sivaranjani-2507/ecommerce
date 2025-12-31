"use client"

import Link from "next/link";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { PiHeartLight } from "react-icons/pi";
import { FaShoppingCart } from "react-icons/fa";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const [counts, setCounts] = useState<{ [key: number]: number }>({});
    const [totalCount, setTotalCount] = useState(0);

    useEffect(() => {
        const savedCounts = localStorage.getItem("productCounts");
        if (savedCounts) {
            setCounts(JSON.parse(savedCounts));
        }
    }, []);

    useEffect(() => {
        const savedCounts = localStorage.getItem("productCounts");

        if (savedCounts) {
            const countsObj = JSON.parse(savedCounts);

            const sum = Object.values(countsObj).reduce(
                (acc: number, val: any) => acc + val,
                0
            );

            setTotalCount(sum);
        }
    }, []);


    return (
        <>
            <header className="bg-gradient-to-l from-indigo-600 via-purple-600 to-pink-500 sticky top-0 z-50">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between p-4">

                        <Link href="/">
                            <h1 className="text-2xl font-semibold text-white">
                                Order Magic
                            </h1>
                        </Link>

                        <div className="hidden md:flex items-center space-x-8 gap-6">
                            <Link
                                href="/dashboard/settings"
                                className="text-white hover:text-yellow-300 transition"
                            >
                                Menu
                            </Link>

                            <Link href="/about">
                                <button className="text-white hover:text-yellow-300 transition">
                                    About
                                </button>
                            </Link>

                            <Link href="/card">
                                <button className="flex relative text-white hover:text-yellow-300 transition">
                                    Cart <span><FaShoppingCart className="w-4 h-4 mt-[3px]" /></span>
                                    {totalCount > 0 && (
                                        <span className="absolute -top-3 -right-5 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                                            {totalCount}
                                        </span>
                                    )}
                                </button>
                            </Link>

                            <Link href="/like">
                                <button className="text-white hover:text-red-300 transition">
                                    <span><PiHeartLight className="w-5 h-5" /></span>
                                </button>
                            </Link>

                            <Link href="/contact">
                                <button className="text-white hover:text-yellow-300 transition">
                                    Contact
                                </button>
                            </Link>
                        </div>

                        <div className="md:hidden text-white">
                            <button onClick={() => setIsOpen(!isOpen)}>
                                {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                            </button>
                        </div>
                    </div>

                    {isOpen && (
                        <div className="md:hidden bg-white/95 shadow-md rounded-b-lg p-4 space-y-2">

                            <Link href="/dashboard/settings">
                                <button className="w-full px-4 py-2 rounded hover:bg-gray-200">
                                    Menu
                                </button>
                            </Link>

                            <Link href="/about">
                                <button className="w-full px-4 py-2 rounded hover:bg-gray-200">
                                    About
                                </button>
                            </Link>

                            <Link href="/card">
                                <button className="flex relative w-full px-4 py-2 rounded hover:bg-gray-200 flex justify-center">
                                    Cart  <span><FaShoppingCart className="w-4 h-4 mt-[3px]" /></span>
                                    {totalCount > 0 && (
                                        <span className="bg-red-500 ml-3 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                                            {totalCount}
                                        </span>
                                    )}
                                </button>
                            </Link>

                            <Link href="/like">
                                <button className="w-full px-4 py-2 rounded hover:bg-gray-200 flex justify-center">
                                    <span><PiHeartLight /></span>
                                </button>
                            </Link>

                            <Link href="/contact">
                                <button className="w-full px-4 py-2 rounded hover:bg-gray-200">
                                    Contact
                                </button>
                            </Link>

                        </div>
                    )}
                </div>
            </header>
        </>
    );
}
