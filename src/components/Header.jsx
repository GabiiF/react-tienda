import Navbar from "./Navbar";
import styles from './Header.module.css';
import UserIcon from '../assets/UserIcon';
import BagIcon from '../assets/BagIcon';
import { Link } from 'react-router-dom';
import { useAuthContext } from "../context/AuthContext";
import { CarritoContext } from "../context/CarritoContext";
import { useContext } from "react";

const Header = () => {
    const { usuario, logout } = useAuthContext();
    const estaLogeado = !!usuario;

    //para el contador de carrito
    const { carrito } = useContext(CarritoContext);
    const contadorEnCarrito = carrito.length;

    // Verificamos si el usuario es admin
    const esAdmin = usuario?.rol === 'admin';

    return (
        <header className={styles.header}>
            {/* Seccion Central: Componente NavBar */}
            <div className={styles.navbarContainer}>
                <Navbar />
            </div>

            {/* Seccion Derecha: Iconos */}
            <div className={styles.iconsContainer}>
                {/*Me fijo si esta logeado y depende muestro Cerrar Sesion o Ingresá*/}
                {estaLogeado ? (
                    <>


                        {/*Agrego */
                        /* Verifica si alguien esta logeado */}
                        {/* Si es admin, hacer el nombre clickeable, si no, solo texto */}
                        {esAdmin ? (
                            <Link
                                to="/admin"
                                className="hidden md:inline text-sm font-medium text-[#333] hover:underline transition-all duration-200 cursor-pointer"
                            >
                                Hola, {usuario.nombre}
                            </Link>
                        ) : (
                            <span className="hidden md:inline text-sm font-medium text-[#333]">
                                Hola, {usuario.nombre}
                            </span>
                        )}
                        {/*Termino nuevo agregado */}



                        <button onClick={logout} className={styles.login}>Cerrar Sesion</button>
                    </>) : (
                    <Link to="/login">
                        <button className={styles.login}>Ingresá</button>
                    </Link>

                )}
                {/* Icono de Carrito con Contador */}
                <div className={styles.iconoDeCarrito}>
                    <Link to="/carrito">
                        <BagIcon className={styles.icono} />
                        {/* Renderiza el contador solo si es mayor que 0 */}
                        {contadorEnCarrito > 0 && (
                            <span className={styles.contadorDeCarrito}>
                                {contadorEnCarrito}
                            </span>
                        )}
                    </Link>

                </div>
            </div>

        </header>
    );
}
export default Header;