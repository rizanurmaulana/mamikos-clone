import Image from "next/image";

export default function CTAKos() {
  return (
    <section className="py-4">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-12 rounded-2xl border border-gray-200 px-4 py-12 sm:px-8 lg:flex-row">
        {/* Left Content */}
        <div className="max-w-md text-center lg:text-left">
          <h2 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
            Kos Dikelola Mamikos,
            <br />
            Terjamin Nyaman
          </h2>

          <p className="mt-2 text-sm text-gray-600 sm:text-base">
            Disurvey langsung oleh Mamikos. Lokasi terverifikasi, bangunan kos
            lolos seleksi.
          </p>
        </div>

        {/* Right Images */}
        <div className="flex gap-4 sm:gap-6">
          <div>
            <Image
              src="/images/ic_singgahsini_full.svg"
              alt="Kos Mamikos 1"
              width={280}
              height={40}
              className="h-10 w-full object-contain transition duration-300 hover:scale-105"
            />
          </div>

          <div>
            <Image
              src="/images/ic_apik_full.svg"
              alt="Kos Mamikos 2"
              width={280}
              height={40}
              className="h-10 w-full object-contain transition duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
