import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Productos = ({ agregarProducto }) => {
    const [producto, setProducto] = useState([]);//vacio
    const [cargando, setCargando] = useState(true);//al principio esta cargando
    const [error, setError] = useState(null);//al principio no contiene error
    
    const URL = 'https://fakestoreapi.com/products';

    useEffect(() => {
        fetch(URL)
        .then((respuesta) => respuesta.json())
        .then((datos) => setProducto(datos))
        .catch((error) => setError('Error al cargar productos'))
        .finally(() => setCargando(false))
        
    },[]);

    if (cargando){
        return <p>Estamos cargando sus productos ...</p>
    } 

    if (error){
        return <p>{error}</p>
    }
    return(
        <div>
            <h2>Productos</h2>
            <ul>
                {producto.map( (producto)=>
                <li key={producto.id}>
                {producto.title}:${producto.price}
                <img src={producto.image} alt={producto.title} width={80} height={80}/>
                <button  onClick={() => agregarProducto(producto)}>Agregar</button>
                <Link to={`/productos/${producto.id}`}>Detalles</Link>
                </li>
            )}
            </ul>
        </div>
    );
}

export default Productos;