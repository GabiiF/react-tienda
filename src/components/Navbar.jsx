import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css';
import { useAuthContext } from "../context/AuthContext";

const Navbar = () => {
    const { usuario } = useAuthContext();
    const esAdmin = usuario === 'admin';
    return (
        <nav className="flex flex-col md:flex-row md:space-x-6 space-y-7 md:space-y-0 mt-4 md:mt-0">
            <ul className={styles.lista}>
                <li className={styles.item}>
                    <NavLink to="/" className="px-3 py-2 text-xl font-base text-white hover:text-blue-400" style={({ isActive }) => ({
                        color: isActive ? 'cadetblue' : '#fffbfbff',
                        fontWeight: isActive ? 'bold' : 'normal',
                    })}>Inicio</NavLink>
                    <NavLink to="/moda" className="px-3 py-2 text-xl font-base text-white hover:text-blue-400" style={({ isActive }) => ({
                        color: isActive ? 'cadetblue' : '#fffbfbff',
                        fontWeight: isActive ? 'bold' : 'normal',
                    })}>Moda</NavLink>
                    <NavLink to="/tecnologia" className="px-3 py-2 text-xl font-base text-white hover:text-blue-400" style={({ isActive }) => ({
                        color: isActive ? 'cadetblue' : '#fffbfbff',
                        fontWeight: isActive ? 'bold' : 'normal',
                    })}>Tecnología</NavLink>
                    {/*Agrega Admin en Navbar */}
                    {esAdmin &&
                        <NavLink to="/admin" className="px-3 py-2 text-xl font-base text-white hover:text-blue-400">Admin</NavLink>
                    }
                </li>
            </ul>
        </nav>
    );
}
export default Navbar;