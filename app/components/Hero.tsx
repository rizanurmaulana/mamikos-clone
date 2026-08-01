import Image from "next/image";
import { Search } from "lucide-react";

export default function HeroSection() {
  return (
    <section>
      <div className="relative max-w-6xl mx-auto flex items-center justify-center px-4 xl:px-0">
        {/* Background Illustration */}
        <Image
          src="/images/bg_hero_section_top.png"
          alt="City"
          fill
          className="pointer-events-none object-contain object-bottom-right"
        />

        {/* Content */}
        <div className="relative z-10 w-full flex flex-col items-center md:items-start justify-center py-8 sm:py-20">
          <h1 className="text-[32px] font-bold text-gray-700">Mau cari kos?</h1>

          <p className="mt-1 text-xl text-gray-700">
            Dapatkan infonya dan langsung sewa di Mamikos.
          </p>

          {/* Search */}
          <div className="mt-7 flex h-12 w-100 items-center rounded-lg bg-white p-1 shadow-[0_5px_15px_rgba(0,0,0,0.08)]">
            <Search size={22} className="ml-2.5 shrink-0 text-gray-500" />

            <input
              type="text"
              placeholder="Masukan nama lokasi/area/alamat"
              className="ml-3 min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[#9ca3af]"
            />

            <button
              type="button"
              className="h-10 w-22.5 shrink-0 rounded-md bg-primary-500 text-sm font-bold text-white transition hover:bg-primary-600"
            >
              Cari
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
