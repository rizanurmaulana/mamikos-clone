import Image from "next/image";
import { Search } from "lucide-react";

export default function HeroSection() {
  return (
    <section>
      <div className="relative mx-auto flex max-w-6xl items-center overflow-hidden px-6 py-16 lg:px-10">
        {/* Background Illustration */}
        <Image
          src="/images/bg_hero_section_top.png"
          alt="City"
          fill
          className="pointer-events-none object-contain object-right-bottom"
        />

        <div className="relative z-10 max-w-xl">
          <h1 className="text-3xl font-bold text-gray-900">Mau cari kos?</h1>

          <p className="mt-2 text-xl text-gray-700">
            Dapatkan infonya dan langsung sewa di Mamikos.
          </p>

          <div className="mt-8 flex overflow-hidden rounded-xl bg-white shadow-lg">
            <div className="flex flex-1 items-center px-5">
              <Search className="mr-3 h-5 w-5 text-gray-400" />

              <input
                type="text"
                placeholder="Masukan nama lokasi/area/alamat"
                className="w-full py-4 outline-none"
              />
            </div>

            <button className="bg-green-500 px-10 font-semibold text-white hover:bg-green-600">
              Cari
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
