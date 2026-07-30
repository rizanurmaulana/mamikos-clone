"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { promoKost } from "../data/promo-kost";
import PromoCard from "./PromoCard";

const cities = [
  "Semua Kota",
  "Bandung",
  "Jakarta",
  "Surabaya",
  "Yogyakarta",
  "Malang",
];

export default function PromoSection() {
  const [city, setCity] = useState("Semua Kota");
  const [start, setStart] = useState(0);

  const filtered =
    city === "Semua Kota"
      ? promoKost
      : promoKost.filter((item) => item.city === city);

  const visible = filtered.slice(start, start + 4);

  const next = () => {
    if (start + 4 < filtered.length) {
      setStart(start + 1);
    }
  };

  const prev = () => {
    if (start > 0) {
      setStart(start - 1);
    }
  };

  return (
    <section className="py-14">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-semibold">Promo Ngebut</h2>

            <select
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
                setStart(0);
              }}
              className="text-green-500 text-2xl font-semibold focus:outline-none"
            >
              {cities.map((city) => (
                <option key={city}>{city}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-6 divide-x">
            <Link
              href="/promo"
              className="px-2 py-2 border border-gray-400 rounded-lg text-sm font-semibold hover:bg-gray-100"
            >
              Lihat semua
            </Link>
            <div className="flex items-center gap-2">
              <button onClick={prev} className="rounded-full border p-2">
                <ChevronLeft />
              </button>

              <button onClick={next} className="rounded-full border p-2">
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {visible.map((kost) => (
            <PromoCard key={kost.id} kost={kost} />
          ))}
        </div>
      </div>
    </section>
  );
}
