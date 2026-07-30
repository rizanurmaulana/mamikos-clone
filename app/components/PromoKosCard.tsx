"use client";

import Image from "next/image";
import Link from "next/link";
import { Gift, MapPin } from "lucide-react";

interface Kost {
  image: string;
  title: string;
  logo: string;
  type: string;
  roomLeft: number;
  location: string;
  facilities: string;
  promo: string;
  price: string;
}

interface Props {
  kost: Kost;
}

export default function PromoKosCard({ kost }: Props) {
  return (
    <Link href="#" className="group overflow-hidden rounded-2xl bg-white">
      {/* Image */}
      <div className="relative overflow-hidden rounded-2xl">
        <Image
          src={kost.image}
          alt={kost.title}
          width={320}
          height={220}
          className="h-44 w-full object-cover transition duration-300 group-hover:scale-105"
        />

        {/* Logo */}
        <div className="absolute left-0 top-0 rounded-br-xl bg-white px-2 py-1 shadow">
          <Image src={kost.logo} alt="logo" width={14} height={14} />
        </div>
      </div>

      <div className="space-y-1 py-4">
        <div className="flex items-center gap-2 text-xs">
          <span className="rounded-lg border border-gray-100 text-xs bg-gray-50 px-3 py-1 font-medium">
            {kost.type}
          </span>

          <span className="text-gray-500">Sisa {kost.roomLeft} kamar</span>
        </div>

        <h3 className="line-clamp-2 font-semibold">{kost.title}</h3>

        <div className="flex items-center gap-1 text-sm text-gray-500">
          <MapPin size={14} />
          {kost.location}
        </div>

        <p className="line-clamp-1 text-sm text-gray-500">{kost.facilities}</p>

        <span className="flex items-center gap-1 text-sm font-semibold text-green-600">
          <Gift size={14} className="inline-block" />
          {kost.promo}
        </span>

        <p className="font-semibold">{kost.price}</p>
      </div>
    </Link>
  );
}
