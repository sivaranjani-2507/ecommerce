import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 px-6">
      <div className="max-w-4xl bg-white dark:bg-zinc-900 shadow-xl rounded-2xl p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-6">
          About Amazon
        </h1>

        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed text-center">
          Amazon is a global tech giant known for its massive e-commerce platform,
          leading cloud computing services (<span className="font-semibold">AWS</span>),
          streaming platforms like <span className="font-semibold">Prime Video</span> and
          <span className="font-semibold"> Music</span>, and cutting-edge AI solutions.
        </p>

        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed text-center">
          Founded by <span className="font-semibold">Jeff Bezos</span> in 1994 as an online
          bookstore, Amazon evolved into <span className="italic">“The Everything Store”</span>.
          Today, it is one of the world’s most valuable companies and a leader in logistics,
          hardware (<span className="font-semibold">Kindle, Echo</span>), and digital services.
        </p>

        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed text-center">
          Amazon continues to innovate by expanding into satellite internet
          (<span className="font-semibold"> Project Kuiper</span>) and autonomous vehicles
          (<span className="font-semibold"> Zoox</span>), shaping the future of technology.
        </p>
      </div>
    </div>
  );
}
