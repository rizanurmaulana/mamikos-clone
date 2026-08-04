"use client";

import Image from "next/image";
import Link from "next/link";
import { Gift, MapPin } from "lucide-react";

interface Kost {
  link: string;
  image: string;
  title: string;
  verified: string;
  type: string;
  roomLeft?: number;
  location: string;
  facilities: string;
  promo: string;
  price: number;
}

interface Props {
  kost: Kost;
}

const formatRupiah = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);

export default function PromoKosCard({ kost }: Props) {
  return (
    <Link
      href={kost.link}
      className="group overflow-hidden rounded-2xl bg-white"
    >
      {/* Image */}
      <div className="overflow-hidden rounded-2xl">
        <div className="relative">
          {/* Image */}
          <div className="h-32 w-full overflow-hidden md:h-42">
            <Image
              src={kost.image}
              alt={kost.title}
              width={320}
              height={220}
              className="h-full w-full object-cover transition duration-300 hover:scale-105"
            />
          </div>

          {/* Verified Logo */}
          <div className="absolute left-0 top-0 flex h-6 items-center justify-center rounded-br-lg bg-white px-2">
            <Image
              src={kost.verified}
              alt="Verified"
              width={14}
              height={14}
              className="h-4 w-auto object-contain"
            />
          </div>
        </div>
      </div>

      <div className="space-y-1 py-4">
        <div className="flex items-center gap-2 text-xs">
          <span className="rounded-lg border border-gray-100 text-xs bg-gray-50 px-3 py-1 font-medium">
            {kost.type}
          </span>

          {kost.roomLeft && (
            <span className="text-red-600 text-xs italic">
              Sisa {kost.roomLeft} kamar
            </span>
          )}
        </div>

        <h3 className="line-clamp-1 font-semibold">{kost.title}</h3>

        <p className="text-sm text-gray-500 flex items-center gap-2">
          <MapPin size={14} className="inline-block" />
          {kost.location}
        </p>

        <p className="line-clamp-1 text-xs text-gray-500">{kost.facilities}</p>

        <span className="flex items-center gap-1 text-sm font-semibold text-green-600">
          <Gift size={14} className="inline-block" />
          {kost.promo}
        </span>

        <div className="flex items-center gap-1">
          <p className="font-semibold">{formatRupiah(kost.price)}</p>
          <span className="font-normal">/bulan</span>
        </div>
      </div>
    </Link>
  );
}
