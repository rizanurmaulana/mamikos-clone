"use client";

import {
  BedDouble,
  Building,
  Calendar,
  ChevronDown,
  Megaphone,
  Menu,
  Search,
  Smartphone,
  Tag,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

export default function Header() {
  // Dropdown desktop
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);

  // Dropdown mobile
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  // Mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const desktopDropdownRef = useRef<HTMLLIElement>(null);

  // Close desktop dropdown ketika klik di luar
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(event.target as Node)
      ) {
        setDesktopDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsCompact(window.scrollY > 300);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gray-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          {/* Left */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              href="#"
              className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 transition hover:text-green-600"
            >
              <Smartphone size={14} />
              <span>Download App</span>
            </Link>

            <Link
              href="#"
              className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 transition hover:text-green-600"
            >
              <Calendar size={14} />
              <span>Sewa Kos</span>
            </Link>
          </div>

          {/* Right */}
          <Link
            href="#"
            className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 transition hover:text-green-600"
          >
            <Megaphone size={14} />

            <span className="hidden sm:inline">Promosikan iklan Anda</span>

            <span className="sm:hidden">Promosikan</span>
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <div className="mx-auto flex max-w-6xl items-center justify-between md:h-18 py-4 md:py-0 px-4 md:px-6 xl:px-0">
        <div className="flex items-center gap-4 flex-1">
          <div
            className={`relative h-8 transition-all duration-300 ${
              isCompact ? "w-8" : "w-35"
            }`}
          >
            <Image
              src="/images/logo/logo_mamikos_green_v2.svg"
              alt="Mamikos"
              width={140}
              height={32}
              className={`absolute left-0 top-0 h-8 w-auto`}
            />

            <Image
              src="/images/logo/icon_mamikos.svg"
              alt="Mamikos"
              width={32}
              height={32}
              className={`absolute left-0 top-0 h-8 w-auto`}
            />
          </div>

          {isCompact && (
            <div className="hidden lg:flex flex-1 max-w-lg">
              {/* Search */}
              <div className="flex h-10 w-90 md:w-100 lg:w-110 items-center rounded-lg bg-white p-1 border border-gray-200">
                <Search size={22} className="ml-2.5 shrink-0 text-gray-500" />

                <input
                  type="text"
                  placeholder="Masukan nama lokasi/area/alamat"
                  className="ml-3 min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-gray-00"
                />

                <button
                  type="button"
                  className="h-8 w-20 shrink-0 rounded-md bg-primary-500 text-sm font-bold text-white transition hover:bg-primary-600 cursor-pointer"
                >
                  Cari
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-4 lg:gap-6 text-sm">
            {/* Cari Apa */}
            <li ref={desktopDropdownRef} className="relative">
              <button
                type="button"
                onClick={() => setDesktopDropdownOpen((prev) => !prev)}
                aria-expanded={desktopDropdownOpen}
                className="nav-underline inline-flex cursor-pointer items-center gap-1.5 font-medium"
              >
                Cari Apa?
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${
                    desktopDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {desktopDropdownOpen && (
                <div className="absolute left-0 top-full z-50 mt-3 w-60 rounded-lg bg-white p-2 shadow-lg ring-1 ring-black/5">
                  <ul className="flex flex-col gap-1">
                    <li>
                      <a
                        href="#"
                        className="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm transition hover:bg-gray-50"
                      >
                        <BedDouble size={16} />
                        List Kos
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm transition hover:bg-gray-50"
                      >
                        <Image
                          src="/images/logo/ic_singgahsini_mini.svg"
                          alt=""
                          width={16}
                          height={16}
                        />
                        Kos Singgahsini & Apik
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm transition hover:bg-gray-50"
                      >
                        <Image
                          src="/images/logo/icon-kos-andalan.svg"
                          alt=""
                          width={16}
                          height={16}
                        />
                        Kos Andalan
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm transition hover:bg-gray-50"
                      >
                        <Building size={16} />
                        Apartment
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm transition hover:bg-gray-50"
                      >
                        <Tag size={16} />
                        Jual-Beli Properti
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            <li>
              <a href="#" className="nav-underline font-medium">
                Pusat Bantuan
              </a>
            </li>

            <li>
              <a href="#" className="nav-underline font-medium">
                Syarat dan Ketentuan
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex w-fit items-center rounded-lg bg-primary-500 px-6 py-2 text-sm font-semibold text-white transition hover:bg-primary-600"
              >
                Masuk
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-gray-700 transition hover:bg-gray-100 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <nav className="mx-auto max-w-6xl px-4 py-4">
            <ul className="flex flex-col">
              {/* Cari Apa */}
              <li>
                <button
                  type="button"
                  onClick={() => setMobileDropdownOpen((prev) => !prev)}
                  aria-expanded={mobileDropdownOpen}
                  className="flex w-full items-center justify-between py-3 text-left text-sm font-medium text-gray-700"
                >
                  Cari Apa?
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${
                      mobileDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileDropdownOpen && (
                  <div className="mb-2 rounded-lg bg-gray-50 p-2">
                    <a
                      href="#"
                      className="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm text-gray-700 hover:bg-white"
                    >
                      <BedDouble size={16} />
                      List Kos
                    </a>

                    <a
                      href="#"
                      className="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm text-gray-700 hover:bg-white"
                    >
                      <Image
                        src="https://mamikos.com/general/img/logo/icon-singgahsini.svg"
                        alt=""
                        width={16}
                        height={16}
                      />
                      Kos Singgahsini & Apik
                    </a>

                    <a
                      href="#"
                      className="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm text-gray-700 hover:bg-white"
                    >
                      <Image
                        src="https://mamikos.com/general/img/logo/icon-kos-andalan.svg"
                        alt=""
                        width={16}
                        height={16}
                      />
                      Kos Andalan
                    </a>

                    <a
                      href="#"
                      className="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm text-gray-700 hover:bg-white"
                    >
                      <Building size={16} />
                      Apartment
                    </a>

                    <a
                      href="#"
                      className="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm text-gray-700 hover:bg-white"
                    >
                      <Tag size={16} />
                      Jual-Beli Properti
                    </a>
                  </div>
                )}
              </li>

              <li className="border-t border-gray-100">
                <a
                  href="#"
                  className="block py-3 text-sm font-medium text-gray-700"
                >
                  Pusat Bantuan
                </a>
              </li>

              <li className="border-t border-gray-100">
                <a
                  href="#"
                  className="block py-3 text-sm font-medium text-gray-700"
                >
                  Syarat dan Ketentuan
                </a>
              </li>

              <li className="border-t border-gray-100 pt-4">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-lg bg-primary-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-600"
                >
                  Masuk Sebagai Pemilik
                </a>
              </li>

              <li className="pt-4">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-lg border border-primary-500 px-4 py-2 text-sm font-semibold text-primary-500 transition hover:border-primary-600"
                >
                  Masuk Sebagai Pencari
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
