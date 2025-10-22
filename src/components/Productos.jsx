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
            // agrego error en setError xq sino me tira error
            .catch((error) => setError(error, 'Error al cargar productos'))
            .finally(() => setCargando(false))

    }, []);

    if (cargando) {
        return <p>Estamos cargando sus productos ...</p>
    }

    if (error) {
        return <p>{error}</p>
    }
    return (
        <div>
            <h2 className="text-3xl font-bold">Productos</h2>
            <ul>
                {producto.map((producto) =>
                    <li key={producto.id}>
                        {producto.title}:${producto.price}
                        <img src={producto.image} alt={producto.title} width={80} height={80} />
                        {/*Botones Tailwind */}
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 active:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={() => agregarProducto(producto)}>Agregar</button>
                            <Link to={`/productos/${producto.id}`} className="text-sm/6 font-semibold text-gray-900">Detalles <span aria-hidden="true">→</span></Link>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default Productos;