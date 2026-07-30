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
      <div className="mx-auto max-w-6xl overflow-hidden px-4 sm:px-6 lg:px-0">
        <Swiper
          modules={[Navigation, Autoplay]}
          loop
          centeredSlides
          slidesPerView={"auto"}
          spaceBetween={16}
          breakpoints={{
            640: {
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 24,
            },
          }}
          navigation={{
            prevEl: ".promo-prev",
            nextEl: ".promo-next",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="!overflow-visible"
        >
          {promos.map((promo) => (
            <SwiperSlide
              key={promo.id}
              className="!w-[calc(100vw-2rem)] sm:!w-[min(520px,calc(100vw-3rem))] lg:!w-[590px]"
            >
              <Link href={promo.link} target="_blank">
                <div className="overflow-hidden rounded-xl transition-all duration-300">
                  <Image
                    src={promo.image}
                    alt="Promo"
                    width={590}
                    height={250}
                    sizes="(max-width: 640px) calc(100vw - 2rem), (max-width: 1024px) 520px, 590px"
                    className="aspect-[590/250] h-auto w-full object-cover"
                  />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom */}
        <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:mt-8 sm:flex-row sm:gap-8 lg:mt-10 lg:gap-10">
          <button className="promo-prev flex h-11 w-11 items-center justify-center rounded-full bg-white shadow transition hover:shadow-lg sm:h-12 sm:w-12">
            <ChevronLeft size={22} />
          </button>

          <Link
            href="/promo"
            className="text-sm font-semibold hover:text-green-600 sm:text-base"
          >
            Lihat semua promo
          </Link>

          <button className="promo-next flex h-11 w-11 items-center justify-center rounded-full bg-white shadow transition hover:shadow-lg sm:h-12 sm:w-12">
            <ChevronRight size={22} />
          </button>
        </div>
      </div>

      <style jsx global>{`
        .swiper-slide {
          opacity: 0.45;
          transform: scale(0.82);
          transition: all 0.35s ease;
        }

        .swiper-slide-active {
          opacity: 1;
          transform: scale(1);
        }
      `}</style>
    </section>
  );
}
