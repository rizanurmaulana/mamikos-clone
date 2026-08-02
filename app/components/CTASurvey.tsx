import Image from "next/image";
import Link from "next/link";

export default function CTASurvey() {
  return (
    <section className="py-4 px-4 md:px-6 xl:px-0">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 px-4 py-6 md:py-8 md:px-6 lg:px-10">
          <Image
            src="/images/cta/bg_booking_status_right.png"
            alt=""
            width={200}
            height={200}
            className="pointer-events-none absolute right-0 bottom-0 select-none"
            aria-hidden="true"
          />
          {/* Content */}
          <div className="max-w-xl">
            <h2 className="text-xl font-bold text-gray-800 md:text-2xl">
              Survei Kos Idaman Kamu Sekarang!
            </h2>

            <p className="mt-2 text-sm text-gray-800 md:text-base">
              Untungnya ada fitur Survei Kos di Mamikos. Cari, pilih, survei,
              hingga sewa kos idaman dijamin aman dan GRATIS.
            </p>

            <Link
              href="#"
              className="mt-4 inline-block font-semibold text-sm hover:underline hover:text-primary-500"
            >
              Baca selengkapnya
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
