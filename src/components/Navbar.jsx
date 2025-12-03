import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css';
import { useAuthContext } from "../context/AuthContext";

const Navbar = () => {
    const { usuario } = useAuthContext();
    const esAdmin = usuario === 'admin';
    return (
        <nav >
            <ul className={styles.lista}>
                <li className={styles.item}>
                    <NavLink to="/" className={styles.link} style={({ isActive }) => ({
                        color: isActive ? 'cadetblue' : '#555',
                        fontWeight: isActive ? 'bold' : 'normal',
                    })}>Inicio</NavLink>
                    <NavLink to="/moda" className={styles.link} style={({ isActive }) => ({
                        color: isActive ? 'cadetblue' : '#555',
                        fontWeight: isActive ? 'bold' : 'normal',
                    })}>Moda</NavLink>
                    <NavLink to="/tecnologia" className={styles.link} style={({ isActive }) => ({
                        color: isActive ? 'cadetblue' : '#555',
                        fontWeight: isActive ? 'bold' : 'normal',
                    })}>Tecnología</NavLink>
                    {/*Agrega Admin en Navbar */}
                    {esAdmin &&
                        <NavLink to="/admin" className={styles.link}>Admin</NavLink>
                    }
                </li>
            </ul>
        </nav>
    );
}
export default Navbar;