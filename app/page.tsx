"use client"

import Link from "next/link";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { IoCarSportSharp } from "react-icons/io5";
import { FaRegCreditCard } from "react-icons/fa6";
import { GrStarOutline } from "react-icons/gr";

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

      // எல்லா product count-um add pannum
      const sum = Object.values(countsObj).reduce(
        (acc: number, val: any) => acc + val,
        0
      );

      setTotalCount(sum);
    }
  }, []);


  return (
    <>
      <section className="bg-gradient-to-l from-indigo-600 via-purple-600 to-pink-500 sticky top-0 z-50">
        <div className="container mx-auto">
          <div className="flex items-center justify-between p-4">
            <h1 className="text-2xl font-semibold text-white">
              Amazing
            </h1>

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
              <button className="relative text-white hover:text-yellow-300 transition">
                Cart
                {totalCount > 0 && (
                  <span className="absolute -top-3 -right-5 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {totalCount}
                  </span>
                )}
              </button>
              <button className="text-white hover:text-yellow-300 transition">
                Settings
              </button>
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
              <button className="relative w-full px-4 py-2 rounded hover:bg-gray-200 flex justify-center">
                Cart
                {totalCount > 0 && (
                  <span className="bg-red-500 ml-3 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {totalCount}
                  </span>
                )}
              </button>

              <button className="w-full px-4 py-2 rounded hover:bg-gray-200">
                Settings
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-6 py-18 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Discover Amazing <br />
            <span className="text-yellow-300">Products</span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-white/90">
            Shop the latest trends, best deals, and top-quality products
            delivered straight to your door.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/dashboard/settings">
              <button className="px-8 py-3 rounded-full bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition">
                Shop Now
              </button>
            </Link>

            <button className="px-8 py-3 rounded-full border border-white font-bold hover:bg-white hover:text-black transition">
              View Categories
            </button>
          </div>

          <div className="mt-15 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white/15 backdrop-blur-md p-6 rounded-xl">
              <h3 className="flex text-xl font-bold gap-4 justify-center">
                <span><IoCarSportSharp className="text-2xl text-yellow-300" /></span>
                Fast Delivery</h3>
              <p className="mt-2 text-sm text-white/80">
                Get your products delivered quickly and safely.
              </p>
            </div>

            <div className="bg-white/15 backdrop-blur-md p-6 rounded-xl">
              <h3 className="flex text-xl font-bold gap-4 justify-center">
                <span><FaRegCreditCard className="text-2xl text-yellow-300" /></span>
                Secure Payment</h3>
              <p className="mt-2 text-sm text-white/80">
                100% secure payment with trusted gateways.
              </p>
            </div>

            <div className="bg-white/15 backdrop-blur-md p-6 rounded-xl">
              <h3 className="flex text-xl font-bold gap-4 justify-center">
                <span><GrStarOutline className="text-2xl text-yellow-300" /></span>
                Best Quality</h3>
              <p className="mt-2 text-sm text-white/80">
                Only the best quality products for you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
