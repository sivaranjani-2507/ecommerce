"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Deshboard() {
  const router = useRouter();

  const handleBack = () => {
    router.push('/')
  }
  return (
    <div className="flex h-100 items-center justify-center bg-zinc-50 font-sans dark:bg-black gap-4">
      <button
        onClick={handleBack}
        className="text-white font-bold py-2 px-4 rounded bg-black">Back</button>
      <h1>Deshboard</h1>
    </div>
  );
}
