import Navbar from "./Navbar";
import styles from './Header.module.css';
import UserIcon from '../assets/UserIcon';
import BagIcon from '../assets/BagIcon';
import { Link } from 'react-router-dom';
import { useAuthContext } from "../context/AuthContext";

const Header = ({ contadorEnCarrito = 5 }) => {
    const { usuario, logout } = useAuthContext();
    const estaLogeado = !!usuario;

    return (
        <header className={styles.header}>
            {/* Seccion Central: Componente NavBar */}
            <div className={styles.navbarContainer}>
                <Navbar />
            </div>

            {/* Seccion Derecha: Iconos */}
            <div className={styles.iconsContainer}>
                {/*Me fijo si esta logeado y depende muestro Cerrar Sesion o Ingresá*/}
                {estaLogeado ?
                    <button onClick={logout} className={styles.login}>Cerrar Sesion</button>
                    :
                    <Link to="/login">
                        <button className={styles.login}>Ingresá</button>
                    </Link>
                }
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