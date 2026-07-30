import Image from "next/image";
import Link from "next/link";

export default function CTADaftar() {
  return (
    <section className="py-4">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-gray-200">
        <div
          className="relative overflow-hidden rounded-2xl"
          style={{
            backgroundImage: "url('/images/landing-owner-entry-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative z-10 flex flex-col items-center justify-between gap-10 lg:flex-row">
            {/* Left Content */}
            <div className="max-w-lg ps-12 flex flex-col justify-center">
              <h2 className="text-2xl font-bold leading-tight">
                Daftarkan Kos Anda di Mamikos
              </h2>

              <p className="mt-4 text-base">
                Berbagai fitur dan layanan untuk meningkatkan bisnis kos Anda.
              </p>

              <Link
                href="#"
                className="mt-4 inline-flex items-center rounded-lg bg-green-500 px-4 py-2 font-semibold text-white text-sm transition hover:bg-green-600 w-fit"
              >
                Pelajari Lebih Lanjut
              </Link>
            </div>

            {/* Right Image */}
            <div className="relative h-65 w-full max-w-md">
              <Image
                src="/images/landing-owner-entry.webp"
                alt="Daftarkan Kos"
                fill
                className="object-contain object-bottom-right"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
