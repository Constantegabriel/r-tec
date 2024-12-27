import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/img/Rtec1.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sobre a Empresa */}
          <div>
            <h2 className="text-xl font-bold mb-4">Sobre Nós</h2>
            <p className="text-sm leading-relaxed">
              A RizonTec é uma empresa dedicada à criação de soluções digitais, incluindo sites, aplicativos, automações e estratégias de marketing digital. Nosso objetivo é impulsionar negócios e conectar pessoas através da tecnologia.
            </p>
          </div>

          {/* Contatos */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contatos</h2>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <FaPhoneAlt className="text-gray-100" />
                <span>(11) 1234-5678</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-gray-100" />
                <span>contato@rizontec.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-gray-100" />
                <span>Av. Principal, 123 - São Paulo, SP</span>
              </li>
            </ul>
          </div>

          {/* Links Úteis */}
          <div>
            <h2 className="text-xl font-bold mb-4">Links Úteis</h2>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="hover:underline">Sobre a Empresa</a>
              </li>
              <li>
                <a href="#services" className="hover:underline">Serviços</a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">Contato</a>
              </li>
              <li>
                <a href="#faq" className="hover:underline">Perguntas Frequentes</a>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h2 className="text-xl font-bold mb-4">Siga-nos</h2>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 hover:bg-blue-900 p-3 rounded-full transition duration-300"
              >
                <FaFacebookF className="text-white w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 hover:bg-blue-900 p-3 rounded-full transition duration-300"
              >
                <FaInstagram className="text-white w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 hover:bg-blue-900 p-3 rounded-full transition duration-300"
              >
                <FaLinkedinIn className="text-white w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-4 text-center">
          <p className="text-sm">© 2024 RizonTec. Todos os direitos reservados.</p>
          <p className="text-sm">Desenvolvido por RizonTec.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
