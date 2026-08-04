"use client";

import Image from "next/image";
import { MapPin, Star, Zap } from "lucide-react";
import Link from "next/link";

interface Kost {
  link: string;
  image: string;
  verified: string;
  title: string;
  type: string;
  rating?: number;
  roomLeft: number;
  location: string;
  badges: string[];
  facilities?: string;
  discount?: number;
  price?: number;
  promoPrice?: number;
  period?: string;
}

interface PromoCardProps {
  kost: Kost;
}

const formatRupiah = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);

const formatDiscount = (value: number) => {
  if (value >= 1000000) {
    return `${Math.round(value / 1000000)}jt`;
  }

  return `${Math.round(value / 1000)}rb`;
};

export default function PromoCard({ kost }: PromoCardProps) {
  const badgeConfig = {
    "Rare Kost": {
      image: "/images/logo/rare_kost.png",
      className: "bg-gray-100 text-white",
    },
    "Super Rare Kost": {
      image: "/images/logo/super_rare_kost.png",
      className: "bg-purple-500 text-white",
    },
    "Ultra Rare Kost": {
      image: "/images/logo/ultra_rare_kost.png",
      className: "bg-red-100 text-white",
    },
    "Bebas Deposit": {
      image: "/images/logo/bebas_deposit.png",
      className: "bg-pink-200 text-white",
    },
  } as const;

  const hasPromo = kost.discount && kost.price;

  return (
    <Link
      href={kost.link}
      target="_blank"
      className="overflow-hidden rounded-2xl bg-white cursor-pointer"
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

        {/* Badge */}
        {kost.badges?.length > 0 && (
          <div>
            {kost.badges.map((badge) => {
              const config = badgeConfig[badge as keyof typeof badgeConfig];

              if (!config) return null;

              return (
                <div
                  key={badge}
                  className={`flex h-7 py-1 items-center justify-center ${config.className}`}
                >
                  <Image
                    src={config.image}
                    alt={badge}
                    width={120}
                    height={28}
                    className="h-full w-auto object-contain"
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="space-y-1 py-4">
        {/* Badge */}
        <div className="flex items-center gap-2">
          <span className="rounded-lg border border-gray-100 text-xs bg-gray-50 px-3 py-1 font-medium">
            {kost.type}
          </span>

          {kost.rating != null && (
            <div className="flex items-center gap-1 text-xs text-yellow-500">
              <Star size={12} fill="currentColor" />
              <span>{kost.rating}</span>
            </div>
          )}

          <span className="text-red-600 text-xs italic">
            Sisa {kost.roomLeft} kamar
          </span>
        </div>

        <h3 className="line-clamp-1 font-semibold">{kost.title}</h3>

        <p className="text-sm text-gray-500 flex items-center gap-2">
          <MapPin size={14} className="inline-block" />
          {kost.location}
        </p>

        <p className="line-clamp-1 text-xs text-gray-500">{kost.facilities}</p>

        {/* Harga */}
        {hasPromo ? (
          <>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-2 text-sm font-semibold text-red-600">
                <Zap size={14} />
                Diskon {formatDiscount(kost.discount!)}
              </span>

              <p className="text-sm text-gray-400 line-through">
                {formatRupiah(kost.price!)}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <p className="font-semibold">{formatRupiah(kost.promoPrice!)}</p>

              {kost.period && (
                <p className="text-xs text-gray-500">({kost.period})</p>
              )}
            </div>
          </>
        ) : (
          kost.price && (
            <div className="flex items-center gap-2">
              <p className="font-semibold">{formatRupiah(kost.price)}</p>
            </div>
          )
        )}
      </div>
    </Link>
  );
}
