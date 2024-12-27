"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { PiGearDuotone } from "react-icons/pi";
import { HiOutlinePaintBrush, HiChartBar , HiCheckBadge } from "react-icons/hi2";
import './globals.css'

import { useState } from "react";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section>
      {/* Swiper Section */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 8000 }}
        pagination={{ clickable: true }}
        className="h-screen text-white"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {/* Slide 1 */}
        <SwiperSlide className="relative flex items-center justify-start h-screen">
          <div
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-1000 ${
              activeIndex === 0 ? "zoom-active" : ""
            }`}
            style={{ backgroundImage: `url('/img/fachada.jpg')` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
          <div className="absolute bottom-16 left-[5%] lg:left-10 text-left px-4 md:px-10 pb-10 max-w-lg">
            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-5 text-white">
              Sua Marmoraria em Florianópolis
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl w-full sm:w-[80%] md:w-[600px] text-[#e7e7e7] font-medium mb-4 sm:mb-6">
              Oferecemos uma ampla seleção de mármores e granitos nacionais e importados, com acabamento impecável e designs únicos.
            </p>
            <Link href="https://api.whatsapp.com/send?phone=48998442768">
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-800 border-[1px] border-blue-500 rounded-full text-sm md:text-lg font-semibold transition">
                Solicite um Orçamento
              </button>
            </Link>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="relative flex items-end justify-start h-screen">
          <div
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-1000 ${
              activeIndex === 1 ? "zoom-active" : ""
            }`}
            style={{ backgroundImage: `url('/img/gs1.jpg')` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
          <div className="absolute bottom-16 left-[5%] lg:left-10 text-left px-4 md:px-10 pb-10 max-w-lg">
            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-5 text-white">
              Excelência em Serviços de Marmoraria
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl w-full sm:w-[80%] md:w-[600px] text-[#e7e7e7] font-medium mb-4 sm:mb-6">
              Realizamos serviços personalizados e de alta qualidade para transformar cada ambiente em uma obra de arte.
            </p>
            <Link href="/services">
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-800 border-[1px] border-blue-500 rounded-full text-sm md:text-lg font-semibold transition">
                Conheça nossos Serviços
              </button>
            </Link>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide className="relative flex items-end justify-start h-screen">
          <div
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-1000 ${
              activeIndex === 2 ? "zoom-active" : ""
            }`}
            style={{ backgroundImage: `url('/img/maquinario.avif')` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
          <div className="absolute bottom-16 left-[5%] lg:left-10 text-left px-4 md:px-10 pb-10 max-w-lg">
            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-5 text-white">
              Tecnologia e Profissionalismo
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl w-full sm:w-[80%] md:w-[600px] text-[#e7e7e7] font-medium mb-4 sm:mb-6">
              Utilizamos os melhores maquinários e contamos com uma equipe altamente qualificada para entregar resultados excepcionais.
            </p>
            <Link href="https://maps.app.goo.gl/NPSJPNp6B877nH396">
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-800 border-[1px] border-blue-500 rounded-full text-sm md:text-lg font-semibold transition">
                Conheça nossa Estrutura
              </button>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Serviços em destaque */}

      {/* Sobre nós */}
      <div className="bg-white py-16 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <Image
            src="/img/fachada.jpg"
            alt="Nossa Fachada"
            width={600}
            height={400}
            className="w-[80%] border-l-[10px] border-gray-800 shadow-lg"
          />
          <div>
            <h2 className="text-2xl md:text-4xl text-gray-800 font-bold mb-4">
              Sobre a <span className="text-gray-800">Marmoraria Florianópolis</span>
            </h2>
            <p className="text-gray-600 mb-4">
              Com anos de experiência, oferecemos produtos e serviços que
              transformam projetos em realidade. Nosso compromisso é com a
              excelência e a satisfação dos nossos clientes.
            </p>
            <p className="text-gray-600">
              Seja para reformas residenciais ou grandes projetos comerciais,
              estamos prontos para atender suas necessidades com materiais de
              alta qualidade e acabamentos impecáveis.
            </p>
            <button className="bg-blue-600 mt-[30px] px-8 py-[7px] hover:bg-gray-700 rounded-full font-semibold">
              Sobre a empresa
            </button>
          </div>
        </div>
      </div>
      <div className="bg-blue-600 py-[80px] rounded-lg px-6 md:px-20">
        <h2 className="text-center text-gray-100 text-2xl md:text-4xl font-bold mb-12">
          Descubra por que somos a marmoraria certa para você
        </h2>
        <div className="flex text-gray-800 flex-wrap justify-center gap-6">
          
          {/* Bloco 1: Portfólio */}
          <div className="text-center bg-white p-8 border-2 border-gray-800 pt-12 pb-6 rounded-lg hover:shadow-lg transition w-full md:w-[350px]">
            <p className="text-center flex justify-center text-[35px] mb-[10px]">
              <HiCheckBadge />
            </p>
            <h1 className="text-lg font-bold">SITES / APPS / AUTOMAÇÕES</h1>
            <p className="text-gray-800 text-md mt-4">
              Inspire-se com nossos projetos realizados, criados com precisão e dedicação.
            </p>
            <a href="./sites" className="font-semibold text-gray-600 text-right text-[15px] underline mt-[19px] block">
              Saiba mais
            </a>
          </div>

          {/* Bloco 2: Produtos */}
          <div className="text-center bg-white p-8 pt-12 border-2 border-gray-800 pb-6 rounded-lg hover:shadow-lg transition w-full md:w-[350px]">
            <p className="text-center flex justify-center text-[35px] mb-[10px]">
              <HiOutlinePaintBrush />
            </p>
            <h1 className="text-lg font-bold">DESIGN</h1>
            <p className="text-gray-800 text-md mt-4">
              Trabalhamos com os melhores materiais para oferecer qualidade e sofisticação.
            </p>
            <a href="./design" className="font-semibold text-gray-600 text-right text-[15px] underline mt-[19px] block">
              Saiba mais
            </a>
          </div>

          {/* Bloco 3: Maquinário */}
          <div className="text-center bg-white p-8 pt-12 border-2 border-gray-800 pb-6 rounded-lg hover:shadow-lg transition w-full md:w-[350px]">
            <p className="text-center flex justify-center text-[35px] mb-[10px]">
            <HiChartBar />
            </p>
            <h1 className="text-lg font-bold">TRAFEGO PAGO</h1>
            <p className="text-gray-800 text-md mt-4">
              Modernos equipamentos e uma equipe qualificada garantem resultados superiores.
            </p>
            <a href="./tpaid" className="font-semibold text-gray-600 text-right text-[15px] underline mt-[19px] block">
              Saiba mais
            </a>
          </div>

        </div>
      </div>
      {/* Galeria */}
      <div className="bg-gray-200 py-12 px-6 md:px-20">
        <h2 className="text-center text-gray-800 text-2xl md:text-4xl font-bold mb-8">
          Galeria de Serviços
        </h2>
        <h2 className="text-gray-700 mb-12 text-lg text-center w-[90%] md:w-[70%] mx-auto">
          Confira nossa seleção de serviços personalizados sob medida, especialmente projetados para transformar seus ambientes em espaços sofisticados e únicos.
        </h2>
        <div className="grid grid-cols-1 mt-[20px] lg:grid-cols-3 gap-6">
          <Image
            src="/img/gs1.jpg"
            alt="Projeto 1"
            width={400}
            height={300}
            className="w-[80%] lg:w-full lg:m-0 lg:mt-10 mr-[10%] h-60 object-cover rounded-lg shadow-2xl"
          />
          <Image
            src="/img/gs2.jpg"
            alt="Projeto 2"
            width={400}
            height={300}
            className="w-[80%] lg:w-full lg:m-0 h-60 ml-[20%] object-cover rounded-lg shadow-2xl"
          />
          <Image
            src="/img/quarto.jpg"
            alt="Projeto 3"
            width={400}
            height={300}
            className="w-[80%] lg:w-full mx-auto lg:mt-20 h-60 object-cover rounded-lg shadow-2xl"
          />
        </div>
        <div className="flex mt-[25px] lg:mt-[15px] justify-center">
          <Link href="/services">
            <button className="px-10 py-[10px] rounded-full text-white font-medium bg-gray-800">
              Veja Nossas Soluções
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
