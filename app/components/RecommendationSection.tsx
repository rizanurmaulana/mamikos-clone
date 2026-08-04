"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import RecommendationCard from "./RecommendationCard";
import { recommendationKost } from "../data/recommendation-kost";

const cities = [
  "Semua Kota",
  "Jakarta Pusat",
  "Jakarta Barat",
  "Jakarta Timur",
  "Jakarta Selatan",
  "Tangerang",
  "Bandung",
  "Yogyakarta",
  "Semarang",
  "Surabaya",
  "Malang",
  "Depok",
  "Bekasi",
  "Jakarta Utara",
  "Bogor",
  "Medan",
  "Palembang",
  "Manado",
  "Denpasar",
  "Solo",
  "Makassar",
  "Lampung",
  "Karawang",
  "Batu",
];

export default function RecommendationSection() {
  const [city, setCity] = useState("Solo");

  const scrollRef = useRef<HTMLDivElement>(null);

  const filtered =
    city === "Semua Kota"
      ? recommendationKost
      : recommendationKost.filter((item) => item.city === city);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;

    container.scrollBy({
      left:
        direction === "right" ? container.clientWidth : -container.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-14">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-0">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-gray-800 md:text-2xl">
              Rekomendasi kos di
            </h2>

            <select
              value={city}
              onChange={(e) => {
                setCity(e.target.value);

                scrollRef.current?.scrollTo({
                  left: 0,
                  behavior: "smooth",
                });
              }}
              className="text-primary-500 w-44 text-xl font-semibold focus:outline-none md:text-2xl"
            >
              {cities.map((city) => (
                <option key={city}>{city}</option>
              ))}
            </select>
          </div>

          <div className="hidden items-center gap-6 lg:flex">
            <Link
              href="https://mamikos.com/kost/kost-solo-surakarta-murah"
              className="text-sm text-gray-800 font-semibold hover:underline"
            >
              Lihat semua
            </Link>

            <div className="h-6 w-px bg-gray-200" />

            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow transition hover:shadow-lg cursor-pointer"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={() => scroll("right")}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow transition hover:shadow-lg cursor-pointer"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Card */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto md:overflow-x-hidden snap-x snap-mandatory scroll-smooth scrollbar-hide"
        >
          {filtered.map((kost) => (
            <div
              key={kost.id}
              className="w-52 shrink-0 snap-start md:w-[calc((100%-3rem)/4)]"
            >
              <RecommendationCard kost={kost} />
            </div>
          ))}
        </div>

        {/* Mobile Button */}
        <div className="mt-5 flex justify-center lg:hidden">
          <Link
            href="https://mamikos.com/kost/kost-solo-surakarta-murah"
            className="text-sm text-gray-800 font-semibold hover:underline"
          >
            Lihat semua
          </Link>
        </div>
      </div>
    </section>
  );
}
