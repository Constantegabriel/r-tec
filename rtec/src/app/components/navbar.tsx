"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import logo from "../../../public/img/Rtec1.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showContactBar, setShowContactBar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowContactBar(window.scrollY <= 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-[200] text-white px-6 transition-all duration-500 ${
          showContactBar
            ? "bg-blue-600 bg-opacity-90 py-12 border-b border-transparent"
            : "bg-blue-600 bg-opacity-90 py-4 border-b border-gray-700"
        }`}
      >
        <div className="flex justify-between items-center mx-[3%]">
          {/* Logo */}
          <div className="w-[200px]">
            <Link href="/" className="flex items-center">
              <Image
                src={logo}
                alt="Logo RizonTec"
                width={300}
                height={100}
                className="object-contain"
              />
            </Link>
          </div>



          {/* Botão do Menu Hambúrguer (Mobile) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-[38px] focus:outline-none"
          >
            ☰
          </button>

          {/* Links (Desktop) */}
          <div className="hidden md:flex items-center text-[16px] gap-8 font-medium">
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link href="/sites" className="hover:text-gray-300">
              Sites
            </Link>
            <Link href="/design" className="hover:text-gray-300">
              Design
            </Link>
            <Link href="/tpaid" className="hover:text-gray-300">
              Trafego Pago
            </Link>
            <Link href="/contact" className="hover:text-gray-300">
              Contato
            </Link>
            <Link href="/enterprise" className="hover:text-gray-300">
              Empresa
            </Link>
          </div>
        </div>

        {/* Links (Mobile) */}
        <div
          className={`md:hidden fixed top-0 left-0 w-full h-screen bg-blue-600 bg-opacity-95 backdrop-blur-md z-[800] flex flex-col items-center justify-center gap-6 text-[20px] font-medium transform transition-transform duration-500 ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {/* Logo no topo esquerdo */}
          <div className="absolute top-7 left-6">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <Image
                src={logo}
                alt="Logo Marmoraria Florianópolis"
                width={150}
                height={50}
                className="object-contain"
              />
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-[35px] text-white"
          >
            ✕
          </button>

          <Link
            href="/"
            className="hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/sites"
            className="hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Sites
          </Link>
          <Link
            href="/design"
            className="hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Design
          </Link>
          <Link
            href="/tpaid"
            className="hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Trafego Pago
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Contato
          </Link>
          <Link
            href="/enterprise"
            className="hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Empresa
          </Link>
        </div>
      </nav>
    </>
  );
}
