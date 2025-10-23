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
            {/*Comienza el Card */}
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {producto.map((producto) => (
                    <span key={producto.id}>
                        <Link to={`/productos/${producto.id}`} className="group">
                           <img alt={producto.title}
                               src={producto.image}
                               className="aspect-square w-full rounded-lg bg-gray-200 object-contain group-hover:opacity-75 xl:aspect-7/8"
                           />
                       </Link>
                           <h3 className="mt-4 text-sm text-gray-700">{producto.title}</h3>
                           <p className="mt-1 text-lg font-medium text-gray-900">${producto.price}</p>
                           {/*Botones Tailwind */}
                           <div className="mt-10 flex items-center justify-center gap-x-6">
                               <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 active:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                   onClick={() => agregarProducto(producto)}>Agregar</button>
                               <Link to={`/productos/${producto.id}`} className="text-sm/6 font-semibold text-gray-900">Detalles <span aria-hidden="true">→</span></Link>
                           </div>
                           {/*Termina Botones */}
                    </span>
                ))}
            </div>
            {/*Termina el Card */}
        </div>
    );
}

export default Productos;