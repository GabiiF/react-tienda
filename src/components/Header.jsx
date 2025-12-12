import Navbar from "./Navbar";
import BagIcon from '../assets/BagIcon';
import { Link, NavLink } from 'react-router-dom';
import { useAuthContext } from "../context/AuthContext";
import { CarritoContext } from "../context/CarritoContext";
import { useContext, useState } from "react";

const Header = () => {
    const { usuario, logout } = useAuthContext();
    const estaLogeado = !!usuario;

    //para el contador de carrito
    const { carrito } = useContext(CarritoContext);
    const contadorEnCarrito = carrito.length;

    // Verificamos si el usuario es admin
    const esAdmin = usuario?.rol === 'admin';

    // 1. Hook para controlar si el menú móvil está abierto o cerrado
    const [isOpen, setIsOpen] = useState(false);
    // Función para alternar el estado del menú
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    // Estilos condicionales para el contenido de la navegación móvil
    const navClasses = `w-full md:w-auto md:flex md:items-center 
                ${isOpen ? 'flex flex-col' : 'hidden'} `;

    // 1. Estilos para el estado de la sesión (Derecha, siempre visible en escritorio)
    const SessionInfo = (
        estaLogeado ? (
            <>
                {/*Agrego - Verifica si alguien esta logeado
                 Si es admin, hacer el nombre clickeable, si no, solo texto */}
                {esAdmin ? (
                    <Link
                        to="/admin"
                        className="md:inline text-sm font-medium text-white hover:underline transition-all duration-200 cursor-pointer"
                    >
                        Hola, {usuario.nombre}
                    </Link>
                ) : (
                    <span className="md:inline text-sm font-medium text-white">
                        Hola, {usuario.nombre}
                    </span>
                )}
                {/*Boton Cerrar sesion o Ingresar */}
                <button onClick={logout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-sm text-lg">Cerrar Sesion</button>
            </>) : (
            <Link to="/login">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded text-sm text-2xl">Ingresá</button>
            </Link>
        )
    );

    const IconosCarrito = (
        <>{/* Icono de Carrito con Contador */}
            <div className="relative">
                <Link to="/carrito">
                    <BagIcon className="text-sm font-bold py-1 px-3 rounded" />
                    {/* Renderiza el contador solo si es mayor que 0 */}
                    {contadorEnCarrito > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                            {contadorEnCarrito}
                        </span>
                    )}
                </Link>
            </div>
        </>
    );
    return (
        <header id="header" className="sticky top-0  bg-gray-800 text-white p-3 px-4">
            {/* Seccion Central: Componente NavBar */}
            <div className="container mx-auto flex justify-between items-center">
                {/* --------------------- ESTRUCTURA PRINCIPAL (ESCRITORIO) --------------------- */}
                {/* 1. Contenedor de Navegación (Izquierda en escritorio) */}
                <div className="hidden md:flex md:items-center md:space-x-8">
                    <Link to="/" className="text-xl font-['Nosifer']" onClick={toggleMenu}>Tienda React</Link>
                    <Navbar />
                </div>

                {/* 2. Botón de Menú Hamburguesa y Info de Sesión (Derecha en escritorio) */}
                <div className="flex items-center space-x-4">
                    {/* Botón de Menú Hamburguesa (Visible solo en móviles) */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden focus:outline-none"
                        aria-label="Abrir menú"
                    >
                        {/* Icono de Hamburguesa */}
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                    {/*Para que aparezca afuera - Botón Cerrar Sesion o Ingresá y Carrito*/}
                    <div className="flex items-center space-x-4  md:ml-4" >
                        {SessionInfo}
                        {IconosCarrito}
                    </div >
                </div>

                {/* --------------------- MENÚ MÓVIL (PANTALLA COMPLETA) --------------------- */}
                {/* Menú Overlay que ocupa la pantalla completa en móvil */}
                <div className={
                    `fixed inset-0 bg-gray-900 z-50 transform transition-transform duration-300 ease-in-out
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`
                }>
                    <div className="p-4 flex flex-col h-full">
                        
                        {/* Cabecera del Menú Móvil (Nombre Empresa y 'X' para cerrar) */}
                        <div className="flex justify-between items-center mb-10">
                            <Link to="/" className="text-2xl font-['Nosifer']" onClick={toggleMenu}>Tienda React</Link>
                            {/* Botón de Cerrar (X) */}
                            <button
                                onClick={toggleMenu}
                                className="focus:outline-none"
                                aria-label="Cerrar menú"
                            >
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                        {/* Termina Botón de Menú Hamburguesa */}

                        {/* Contenido Principal de Navegación y Sesión - Menu uno abajo del otro*/}
                        <div className={navClasses}>
                            {/* 1. Navegación Principal (3 enlaces) - Menu uno abajo del otro */}
                            <nav className="flex flex-col md:flex-row md:space-x-6 space-y-7 md:space-y-0 mt-4 md:mt-0">
                                <Link to="/" className="hover:text-blue-400" onClick={toggleMenu}>Inicio</Link>
                                <Link to="/moda" className="hover:text-blue-400" onClick={toggleMenu}>Moda</Link>
                                <Link to="/tecnologia" className="hover:text-blue-400" onClick={toggleMenu}>Tecnología</Link>
                                {/*Termino Menu uno abajo del otro*/}
                                {/*Botón Cerrar Sesion o Ingresá, usuario y carrito
                                <div className="flex items-center space-x-4 md:ml-6" >
                                    {SessionInfo}
                                    {IconosCarrito}
                                </div >*/}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;