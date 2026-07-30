import Link from "next/link";

export default function CTASurvey() {
  return (
    <section className="py-4">
      <div className="mx-auto max-w-6xl">
        <div
          className="relative overflow-hidden rounded-3xl bg-green-50 px-4 py-12 sm:px-8"
          style={{
            backgroundImage: "url('/images/bg_booking_status_right.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right bottom",
            backgroundSize: "200px",
          }}
        >
          {/* Content */}
          <div className="max-w-xl">
            <h2 className="text-xl font-bold text-gray-900 lg:text-2xl">
              Survei Kos Idaman Kamu Sekarang!
            </h2>

            <p className="mt-4 text-base leading-8 text-gray-600">
              Untungnya ada fitur <strong>Survei Kos</strong> di Mamikos. Cari,
              pilih, survei, hingga sewa kos idaman dijamin aman dan GRATIS.
            </p>

            <Link
              href="#"
              className="mt-4 inline-flex items-center rounded-lg bg-green-500 px-4 py-2 font-semibold text-white text-sm transition hover:bg-green-600"
            >
              Baca selengkapnya
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
