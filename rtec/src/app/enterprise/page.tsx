"use client";

import Image from "next/image";
import company from "../../../public/img/quarto.jpg";
import parceiro1 from "../../../public/img/parc2.jpg";
import parceiro2 from "../../../public/img/parc2.jpg";
import parceiro3 from "../../../public/img/parc2.jpg";
import parceiro4 from "../../../public/img/parc2.jpg";

export default function Empresa() {
  return (
    <section className="bg-gray-100 mt-[130px] min-h-screen py-16 px-8 md:px-20">
      {/* Título da página */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Sobre Nós
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          Conheça mais sobre nossa história, missão, visão e valores.
        </p>
      </div>

      {/* Sobre a Empresa */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Nossa História</h2>
        <p className="text-gray-600 leading-relaxed">
          Fundada no ano de 1998 em Florianópolis, a nossa empresa nasceu com o propósito
          de transformar ambientesatravés do beneficiamento de pedras de alta qualidade. 
          Ao longo dos anos, nos tornamos referência no mercado,graças ao compromisso com a
          excelência e o atendimento personalizado aos clientes. Em 2024 a empresa inaugurou
          sua nova sede no municipio de Biguaçu modernizando o setor de produção e inovando
          todo o maquinário qualificandoainda mais o acabamento dos materiais e serviços prestados. 
        </p>
      </div>

      {/* Missão, Visão e Valores */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Missão */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Missão</h3>
          <p className="text-gray-600">
          Proporcionar satisfação e funcionalidade aos ambientes, oferecendo produtos
          e serviços de alta qualidade que superem as expectativas dos nossos clientes.
          </p>
        </div>

        {/* Visão */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Visão</h3>
          <p className="text-gray-600">
          Ser reconhecida como uma empresa de alta qualidade, referência em 
          inovação gerando credibilidade e atendimento.
          </p>
        </div>

        {/* Valores */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Valores</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Satisfação</li>
            <li>Compromisso</li>
            <li>Qualidade</li>
            <li>Ética</li>
            <li>Inovação</li>
          </ul>
        </div>
      </div>

      {/* Parceiros */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Parceiros
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="relative w-full h-48">
              <Image
                src={parceiro1}
                alt="Parceiro 1"
                fill
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            <p className="mt-4 text-gray-700 font-medium">CFL Imoveis</p>
          </div>
          <div>
            <div className="relative w-full h-48">
              <Image
                src={parceiro2}
                alt="Parceiro 2"
                fill
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            <p className="mt-4 text-gray-700 font-medium">CFL Imoveis</p>
          </div>
          <div>
            <div className="relative w-full h-48">
              <Image
                src={parceiro3}
                alt="Parceiro 3"
                fill
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            <p className="mt-4 text-gray-700 font-medium">CFL Imoveis</p>
          </div>
          <div>
            <div className="relative w-full h-48">
              <Image
                src={parceiro4}
                alt="Parceiro 4"
                fill
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            <p className="mt-4 text-gray-700 font-medium">CFL Imoveis</p>
          </div>
        </div>
      </div>

      {/* Imagem Inspiradora */}
      <div className="mt-12">
        <div className="w-full h-80 relative">
          <Image
            src={company}
            alt="Imagem da empresa"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
