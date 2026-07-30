"use client";

import Image from "next/image";
import { MapPin, Star, Zap } from "lucide-react";
import Link from "next/link";

interface PromoCardProps {
  kost: any;
}

export default function PromoCard({ kost }: PromoCardProps) {
  return (
    <Link
      href={"#"}
      target="_blank"
      className="overflow-hidden rounded-2xl bg-white cursor-pointer"
    >
      {/* Image */}
      <div className="relative rounded-2xl overflow-hidden">
        <Image
          src={kost.image}
          alt={kost.title}
          width={320}
          height={220}
          className="h-42 w-full object-cover hover:scale-105 transition duration-300"
        />

        {/* Logo */}
        <div className="absolute left-0 top-0 rounded-br-lg bg-white py-1 px-2 shadow">
          <Image src={kost.logo} alt="Logo" width={14} height={14} />
        </div>
      </div>

      <div className="space-y-1 py-4">
        {/* Badge */}
        <div className="flex items-center gap-2 text-sm">
          <span className="rounded-lg border border-gray-100 text-xs bg-gray-50 px-3 py-1 font-medium">
            {kost.type}
          </span>

          <div className="flex items-center gap-1 text-yellow-500 text-xs">
            <Star size={12} fill="currentColor" />
            <span>{kost.rating}</span>
          </div>

          <span className="text-gray-500 text-xs">
            Sisa {kost.roomLeft} kamar
          </span>
        </div>

        <h3 className="line-clamp-2 font-semibold">{kost.title}</h3>

        <p className="text-sm text-gray-500 flex items-center gap-2">
          <MapPin size={14} className="inline-block" />
          {kost.location}
        </p>

        <p className="line-clamp-1 text-sm text-gray-500">{kost.facilities}</p>

        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-red-600 flex items-center gap-2">
            <Zap size={14} className="inline-block" />
            {kost.discount}
          </span>
          <p className="text-sm text-gray-400 line-through">{kost.price}</p>
        </div>

        <div className="flex items-center gap-2">
          <p className="font-semibold">{kost.promoPrice}</p>

          <p className="text-xs text-gray-500">({kost.period})</p>
        </div>
      </div>
    </Link>
  );
}
