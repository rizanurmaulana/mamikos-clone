import Image from "next/image";

export default function CTAKos() {
  return (
    <section className="py-4 px-4 md:px-6 xl:px-0">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between gap-4 overflow-hidden rounded-2xl border border-gray-200 px-4 py-6 md:py-8 md:px-6 lg:px-10">
          {/* Left Content */}
          <div className="max-w-xs md:max-w-md">
            <h2 className="text-xl font-bold text-gray-800 md:text-2xl">
              Kos Dikelola Mamikos,
              <br />
              Terjamin Nyaman
            </h2>

            <p className="mt-2 text-sm text-gray-800 md:text-base">
              Disurvey langsung oleh Mamikos. Lokasi terverifikasi, bangunan kos
              lolos seleksi.
            </p>
          </div>

          {/* Right Images */}
          <div className="flex flex-col justify-center gap-2 md:flex-row sm:gap-6">
            <div>
              <Image
                src="/images/cta/ic_singgahsini_full.svg"
                alt="Kos Mamikos 1"
                width={280}
                height={40}
                className="h-10 w-full object-contain transition duration-300 hover:scale-105 md:h-14"
              />
            </div>

            <div>
              <Image
                src="/images/cta/ic_apik_full.svg"
                alt="Kos Mamikos 2"
                width={280}
                height={40}
                className="h-10 w-full object-contain transition duration-300 hover:scale-105 md:h-14"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
