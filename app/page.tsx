"use client"

import Link from "next/link";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { IoCarSportSharp } from "react-icons/io5";
import { FaRegCreditCard } from "react-icons/fa6";
import { GrStarOutline } from "react-icons/gr";
import { PiHeartLight } from "react-icons/pi";

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
      <section className="h-[90vh] relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-6 py-18 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Discover Order Magic<br />
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
