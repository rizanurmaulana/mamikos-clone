"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import PromoKosCard from "./PromoKosCard";
import { promoRooms } from "../data/promo-room";

const cities = [
  "Semua Kota",
  "Jakarta",
  "Bandung",
  "Surabaya",
  "Yogyakarta",
  "Malang",
];

export default function PromoKosSection() {
  const [city, setCity] = useState("Semua Kota");
  const [start, setStart] = useState(0);

  const filtered =
    city === "Semua Kota"
      ? promoRooms
      : promoRooms.filter((item) => item.city === city);

  const visible = filtered.slice(start, start + 4);

  const next = () => {
    if (start + 4 < filtered.length) {
      setStart((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (start > 0) {
      setStart((prev) => prev - 1);
    }
  };

  return (
    <section className="py-14">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">Kos yang lagi promo</h2>

            <select
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
                setStart(0);
              }}
              className="bg-transparent text-2xl font-semibold text-green-600 outline-none"
            >
              {cities.map((city) => (
                <option key={city}>{city}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-6 divide-x">
            <Link
              href="/promo-kos"
              className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-semibold hover:bg-gray-100"
            >
              Lihat semua
            </Link>

            <div className="flex gap-2 pl-6">
              <button
                onClick={prev}
                className="rounded-full border p-2 hover:bg-gray-100"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={next}
                className="rounded-full border p-2 hover:bg-gray-100"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Card */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {visible.map((kost) => (
            <PromoKosCard key={kost.id} kost={kost} />
          ))}
        </div>
      </div>
    </section>
  );
}
