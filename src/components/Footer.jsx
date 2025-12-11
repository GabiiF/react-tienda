const Footer = () => {
     const anioActual = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-300 text-gray-900 py-8 px-10 mt-auto text-center">
      {/* Seccion de enlaces */}
      <ul className="list-none p-0 mb-5 flex justify-center space-x-8">
        <li>
          <a href="#" className="no-underline text-gray-900 text-sm transition-colors duration-300 hover:text-gray-700">Acerca de Nosotros</a>
        </li>
        <li>
          <a href="#" className="no-underline text-gray-900 text-sm transition-colors duration-300 hover:text-gray-700">Política de Privacidad</a>
        </li>
      </ul>
      {/* Seccion de Copyright */}
      <p className="text-gray-700 text-xs mt-4">
        © {anioActual} Tienda Talento Tech. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;