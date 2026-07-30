"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";

interface RecommendationCardProps {
  kost: any;
}

export default function RecommendationCard({ kost }: RecommendationCardProps) {
  return (
    <Link href="#" className="overflow-hidden rounded-2xl bg-white">
      <div className="overflow-hidden rounded-2xl">
        <Image
          src={kost.image}
          alt={kost.title}
          width={320}
          height={220}
          className="h-44 w-full object-cover transition duration-300 hover:scale-105"
        />
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

        <p className="pt-2 font-semibold">{kost.price}</p>
      </div>
    </Link>
  );
}
