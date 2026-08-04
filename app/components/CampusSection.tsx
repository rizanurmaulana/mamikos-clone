"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import CampusCard from "./CampusCard";
import { campuses } from "../data/campus";

export default function CampusSection() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-0">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 md:text-2xl">
            Kos sekitar kampus
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {campuses.map((campus) => (
            <CampusCard key={campus.id} campus={campus} />
          ))}

          {/* Card Lihat Semua */}
          <Link
            href="https://mamikos.com/area"
            className="flex items-center justify-center gap-2 rounded-2xl border border-gray-200 p-4 transition hover:shadow-lg group"
          >
            <span className="font-medium text-gray-800 group-hover:text-primary-500">
              Lihat Semua
            </span>

            <ArrowRight
              size={14}
              className="text-gray-800 group-hover:text-primary-500"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
