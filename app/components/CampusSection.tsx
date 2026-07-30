"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import CampusCard from "./CampusCard";
import { campuses } from "../data/campus";

export default function CampusSection() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">Kos sekitar kampus</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {campuses.map((campus) => (
            <CampusCard key={campus.id} campus={campus} />
          ))}

          {/* Card Lihat Semua */}
          <Link
            href="/kampus"
            className="flex items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-green-500 bg-green-50 p-4 transition hover:bg-green-100"
          >
            <span className="font-semibold text-green-600">Lihat Semua</span>

            <ArrowRight size={18} className="text-green-600" />
          </Link>
        </div>
      </div>
    </section>
  );
}
