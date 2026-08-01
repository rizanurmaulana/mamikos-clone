"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { promos } from "../data/promos";

export default function Carousel() {
  return (
    <section className="py-8 sm:py-10 lg:py-12">
      <div className="mx-auto max-w-6xl overflow-x-hidden">
        <Swiper
          modules={[Navigation, Autoplay]}
          loop
          centeredSlides
          slidesPerView="auto"
          spaceBetween={16}
          navigation={{
            prevEl: ".promo-prev",
            nextEl: ".promo-next",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 24,
            },
          }}
          className="promo-swiper"
        >
          {promos.map((promo) => (
            <SwiperSlide
              key={promo.id}
              className="
                      w-[92vw]!
                      sm:w-[80vw]!
                      md:w-160!
                      lg:w-147.5!
                      xl:w-160!
                    "
            >
              <Link href={promo.link} target="_blank">
                <div className="promo-slide overflow-hidden rounded-xl">
                  <Image
                    src={promo.image}
                    alt={promo.title ?? "Promo"}
                    width={590}
                    height={250}
                    sizes="
                      (max-width:640px) 92vw,
                      (max-width:768px) 80vw,
                      (max-width:1024px) 640px,
                      590px
                      "
                    className="aspect-590/250 w-full object-cover"
                  />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-8 mb-4 flex items-center justify-center gap-8">
          <button className="promo-prev flex h-12 w-12 items-center justify-center rounded-full bg-white shadow transition hover:shadow-lg cursor-pointer">
            <ChevronLeft size={22} />
          </button>

          <Link href="/promo" className="text-sm font-semibold hover:underline">
            Lihat semua promo
          </Link>

          <button className="promo-next flex h-12 w-12 items-center justify-center rounded-full bg-white shadow transition hover:shadow-lg cursor-pointer">
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
