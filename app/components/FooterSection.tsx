import Image from "next/image";
import Link from "next/link";

const mamikos = [
  "Tentang Kami",
  "Job Mamikos",
  "Promosikan Kost Anda",
  "Pusat Bantuan",
  "Blog Mamikos",
  "Singgahsini",
];

const kebijakan = ["Kebijakan Privasi", "Syarat dan Ketentuan Umum"];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* Top Footer */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[600px_1fr_1fr_1fr]">
          {/* Column 1 */}
          <div>
            <Image
              src="/images/mamikos-logotype-green.svg"
              alt="Mamikos"
              width={150}
              height={40}
            />

            <p className="mt-5 text-sm leading-7 text-gray-600">
              Dapatkan <strong>&quot;info kost murah&quot;</strong> hanya di Mamikos App.
            </p>

            <p className="mt-6 font-semibold text-gray-900">
              Mau &quot;Sewa Kost Murah&quot;?
            </p>

            <div className="mt-4 flex gap-3">
              <Link href="#">
                <Image
                  src="/images/get-it-on-playstore.svg"
                  alt="Google Play"
                  width={140}
                  height={42}
                  className="h-8 w-auto object-contain"
                />
              </Link>

              <Link href="#">
                <Image
                  src="/images/get-it-on-appstore.svg"
                  alt="App Store"
                  width={140}
                  height={42}
                  className="h-8 w-auto object-contain"
                />
              </Link>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">MAMIKOS</h3>

            <ul className="space-y-3 text-sm text-gray-600">
              {mamikos.map((item) => (
                <li key={item}>
                  <Link href="#" className="transition hover:text-green-600">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Kebijakan</h3>

            <ul className="space-y-3 text-sm text-gray-600">
              {kebijakan.map((item) => (
                <li key={item}>
                  <Link href="#" className="transition hover:text-green-600">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Hubungi Kami</h3>

            <div className="space-y-3 text-sm text-gray-600">
              <a
                href="mailto:cs@mamikos.com"
                className="block hover:text-green-600"
              >
                cs@mamikos.com
              </a>

              <a
                href="tel:+6281325111171"
                className="block hover:text-green-600"
              >
                +62 813-2511-1171
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-gray-200 pt-8 md:flex-row">
          <Image
            src="/images/iso-certificate-v2.svg"
            alt="ISO"
            width={90}
            height={20}
            className="h-10 w-auto object-contain"
          />

          <p className="text-sm text-gray-500">
            © 2026 Mamikos.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
