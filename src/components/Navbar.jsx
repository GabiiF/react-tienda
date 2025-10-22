import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css'; 

const Navbar = () => {
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
                </li>
            </ul>
        </nav>
    );
}
export default Navbar;