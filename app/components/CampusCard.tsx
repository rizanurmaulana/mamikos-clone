"use client";

import Image from "next/image";
import Link from "next/link";

interface CampusCardProps {
  campus: {
    link: string;
    name: string;
    city: string;
    logo: string;
  };
}

export default function CampusCard({ campus }: CampusCardProps) {
  return (
    <Link
      href={campus.link}
      className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 transition hover:shadow-lg"
    >
      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-gray-50">
        <Image
          src={campus.logo}
          alt={campus.name}
          fill
          className="object-contain p-2"
        />
      </div>

      <div>
        <h3 className="line-clamp-1 font-semibold">{campus.name}</h3>

        <p className="text-sm text-gray-500">{campus.city}</p>
      </div>
    </Link>
  );
}
