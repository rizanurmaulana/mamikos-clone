import Image from "next/image";
import Link from "next/link";

export default function CTADaftar() {
  return (
    <section className="px-4 py-4 md:px-6 xl:px-0">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-gray-200">
        <div className="relative h-44 overflow-hidden rounded-2xl">
          {/* Background Image */}
          <Image
            src="/images/cta/landing-owner-entry-bg.webp"
            alt=""
            fill
            priority
            className="-z-10 object-cover"
            aria-hidden="true"
          />

          <div className="relative z-10 flex h-full items-center justify-between">
            {/* Left Content */}
            <div className="max-w-lg ps-4 md:ps-6 lg:ps-10">
              <h2 className="text-xl font-bold text-gray-800 md:text-2xl">
                Daftarkan Kos Anda di Mamikos
              </h2>

              <p className="mt-2 text-sm text-gray-800 md:text-base">
                Berbagai fitur dan layanan untuk meningkatkan bisnis kos Anda.
              </p>

              <Link
                href="#"
                className="mt-3 inline-flex w-fit items-center rounded-lg bg-primary-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-600"
              >
                Pelajari Lebih Lanjut
              </Link>
            </div>

            {/* Right Image */}
            <div className="relative hidden h-full w-90 overflow-hidden md:block">
              <Image
                src="/images/cta/landing-owner-entry.webp"
                alt="Daftarkan Kos"
                width={360}
                height={320}
                className="absolute right-0 top-1/2 h-80 w-auto -translate-y-1/2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
