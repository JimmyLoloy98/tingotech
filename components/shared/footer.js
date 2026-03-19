import Link from "next/link";
import { MapPin, Mail, Phone, Facebook, Instagram } from "react-feather";

export default function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: "#113423" }}>
      <div className="container mx-auto flex flex-col md:flex-row pt-10 pb-10">
        <div className="flex flex-col items-center w-full md:w-2/12 px-5 md:mx-28">
          <img className="pb-4" src="/img/tingotech.png" alt="Logo TingoTech" />
          <p className="text-xs text-justify">
            Brindamos servicio técnico de Laptops y PCs. Mantenimiento
            preventivo y correctivo. Instalación de programas en general.
            Asesoría técnica personalizada. Transparencia y puntualidad nos
            diferencia.
          </p>
        </div>

        <div className="w-full md:w-3/12 pl-8 pt-7">
          <h3 className="font-bold mb-4">Contactos</h3>
          <div className="mb-4">
            <div className="text-sm font-bold flex items-center mb-1">
              <MapPin size={16} className="mr-1" />
              Tingo María
            </div>
            <ul className="pl-5">
              <li className="text-sm py-1">
                <Link
                  href="tel:+51927313308"
                  className="flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone size={16} className="mr-1" />
                  +51 927 313 308
                </Link>
              </li>
              <li className="text-sm py-1">
                <Link
                  href="tel:+51921214341"
                  className="flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone size={16} className="mr-1" />
                  +51 921 214 341
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <div className="text-sm font-bold flex items-center mb-1">
              <MapPin size={16} className="mr-1" />
              Huánuco
            </div>
            <ul className="pl-5">
              <li className="text-sm py-1">
                <Link
                  href="tel:+51986077683"
                  className="flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone size={16} className="mr-1" />
                  +51 986 077 683
                </Link>
              </li>
              <li className="text-sm py-1">
                <Link
                  href="tel:+51928408503"
                  className="flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone size={16} className="mr-1" />
                  +51 928 408 503
                </Link>
              </li>
            </ul>
          </div>
          <ul>
            <li className="text-sm py-1 flex items-center">
              <Link
                href="mailto:hola@tingotech.net"
                className="flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail size={18} className="mr-1" />
                hola@tingotech.net
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-3/12 pl-8 pt-7">
          <h3 className="font-bold mb-4">Redes Sociales</h3>
          <ul>
            <li className="text-sm py-1">
              <Link
                href="https://www.facebook.com/tingotech"
                className="flex items-center"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
              >
                <Facebook size={18} className="mr-1" />
                Facebook
              </Link>
            </li>
            <li className="text-sm mt-1 flex items-center">
              <Link
                href="https://www.instagram.com/tingotech/"
                className="flex items-center"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
              >
                <Instagram size={18} className="mr-1" />
                Instagram
              </Link>
            </li>
            <li className="text-sm py-1 flex items-center">
              <Link
                href="https://api.whatsapp.com/send?phone=51927313308&text=Hola%20tío%20TingoTech%20te%20consulto%20sobre%20"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
              >
                <i className="mr-1 fab fa-whatsapp text-lg"></i>
                WhatsApp
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-2/12 pl-8 pt-7">
          <h3 className="font-bold mb-4">Pagos Aceptados</h3>
          <i className="m-0.5 fab fa-cc-visa md:text-3xl" title="Visa"></i>
          <i className="m-0.5 fab fa-cc-mastercard md:text-3xl" title="Mastercard"></i>
          <i className="m-0.5 fab fa-cc-paypal md:text-3xl" title="Paypal"></i>
          <i className="m-0.5 fas fa-money-check-alt md:text-3xl" title="Efectivo"></i>
        </div>
      </div>

      <div className="py-1 text-center text-xs bg-black text-white font-light opacity-70">
        <p>
          Made with ☕ + ❤ by <b>Goplatin</b> © 2026 TINGOTECH. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
